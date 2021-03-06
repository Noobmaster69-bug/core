const debug = require("../utils/debug")("app/newDevices");
const {
  models,
  devices,
  modbusRTUs,
  modbusTCPs,
  mqtts,
  modbusChannels,
} = require("../model");
const { Op } = require("sequelize");
const { newJob, deleteJob } = require("../config/bull");
const { default: axios } = require("axios");
const sequelize = require("../config/sequelize");
async function getSchedule({ name = null, id = null }) {
  try {
    const result = (
      await devices.findOne({
        where: {
          [Op.and]: {
            [Op.or]: [
              {
                isProvision: {
                  [Op.not]: false,
                },
              },
              {
                isPersistence: { [Op.not]: false },
              },
            ],
            [Op.or]: { name: name, id: id },
          },
        },
        attributes: { exclude: ["modelId"] },
        include: [
          {
            model: models,
            include: [
              {
                model: modbusChannels,
                attributes: { exclude: ["modelId"] },
              },
            ],
          },
          {
            model: modbusRTUs,
            attributes: { exclude: ["deviceId", "id"] },
          },
          {
            model: modbusTCPs,
            attributes: { exclude: ["deviceId", "id"] },
          },
          {
            model: mqtts,
            attributes: ["id"],
          },
        ],
      })
    ).toJSON();
    if (result) {
      result.channels = result.model[result.model.type];
      delete result.model;
      if (result.modbusRTU === null) {
        delete result.modbusRTU;
      }
      if (result.modbusTCP === null) {
        delete result.modbusTCP;
      }
      newJob(result);
    } else {
      throw new Error();
    }
  } catch (err) {
    debug(err);
    throw new Error(err);
  }
}
module.exports = {
  new: async function (req, res) {
    const {
      name,
      interval,
      downProtocol,
      upProtocol,
      startTime,
      modelId,
      isProvision,
      isPersistence,
    } = req.body;
    if (upProtocol) {
      if (upProtocol.type === "mqtt" && upProtocol.wsOption !== undefined) {
        upProtocol.wsOption = JSON.stringify(upProtocol.wsOption);
      }
    }
    try {
      const deviceInstance = {
        name,
        interval,
        downProtocol: downProtocol.type,
        startTime,
        modelId: modelId,
        isProvision,
        isPersistence,
        [downProtocol.type]: {
          ...downProtocol,
        },
      };
      if (upProtocol) {
        Object.assign(deviceInstance, {
          upProtocol: upProtocol.type,
          [upProtocol.type]: {
            ...upProtocol,
          },
        });
      }
      await sequelize.transaction(async (t) => {
        await devices.create(deviceInstance, {
          include: [
            { association: devices.modbusRTUs },
            { association: devices.modbusTCPs },
            { association: devices.mqtts },
          ],
          transaction: t,
        });
      });
      getSchedule({ name: name });
      if (upProtocol) {
        axios.post("http://127.0.0.1:33335/newClient");
      }
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  },
  delete: async function (req, res) {
    const { name = null, id = null } = req.query;
    try {
      const device = await devices.findOne({
        where: { [Op.or]: { name: name, id: id } },
      });
      await deleteJob({ id: device.id });
      if (device.upProtocol) {
        axios.post("http://127.0.0.1:33335/newClient");
      }
      device.destroy();
      return res.sendStatus(200);
    } catch (err) {
      debug(err.message);
      return res.sendStatus(400);
    }
  },
  get: async function (req, res) {
    const { name = null, id = null } = req.query;
    try {
      const result = await devices.findOne({
        where: { [Op.or]: { name: name, id: id } },
        include: [
          { model: models, include: [modbusChannels] },
          { model: modbusRTUs },
          { model: modbusTCPs },
          { model: mqtts },
        ],
      });
      if (result) {
        return res.send(result.toJSON());
      } else {
        throw new Error();
      }
    } catch (err) {
      debug(err.message);
      return res.sendStatus(404);
    }
  },
  getDevicesInfo: async function (req, res) {
    try {
      const result = (
        await devices.findAll({
          include: [
            { model: models },
            { model: modbusRTUs },
            { model: modbusTCPs },
            { model: mqtts },
          ],
        })
      ).map((e) => e.toJSON());
      const defaultMqtt = (
        await mqtts.findOne({ where: { deviceId: null } })
      ).toJSON();
      if (result) {
        result
          .filter((e) => e.upProtocol === null)
          .forEach(async (e) => {
            e.upProtocol = "mqtt";
            e.mqtt = defaultMqtt;
          });
        return res.send(result);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  },
};

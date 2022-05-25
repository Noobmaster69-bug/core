module.exports = {
  async post(req, res) {
    const { sequelize } = require("../sequelize");
    const { Devices } = sequelize.models;
    try {
      await sequelize.transaction(async (t) => {
        const result = await Devices.create(req.body, {
          transaction: t,
        });
        return result;
      });
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  },
  async get(req, res) {},
  async provision(req, res) {
    const id = req.query.id;
    const { sequelize } = require("../sequelize");
    const { Devices, Models, ModelChannel, RESTAttributes, ProtocolConfig } =
      sequelize.models;
    const Device = (
      await Devices.findOne({
        where: {
          id,
        },
        include: [Models, "upProtocol"],
      })
    ).toJSON();

    const channels = (
      await ModelChannel.findAll({
        where: {
          ModelID: Device.ModelID,
        },
        include: ["ModelChannel_" + Device.Model.MicroserviceID],
      })
    )
      .map((e) => e.toJSON())
      .map((e) => e["ModelChannel_" + Device.Model.MicroserviceID].name)
      .reduce(
        (a, b) => ({
          ...a,
          [b]: {
            type: "number",
          },
        }),
        {}
      );
    const package = [
      {
        name: {
          type: "String",
          value: Device.name,
        },
        ...channels,
      },
    ];
    const REST = await RESTAttributes.findOne({
      where: {
        MicroserviceID: Device.upProtocol.MicroserviceID,
        type: "get",
      },
    });
    const { topic } = (
      await sequelize.models[
        "ProtocolConfig_" + Device.upProtocol.MicroserviceID
      ].findOne({
        where: {
          ProtocolID: Device.upProtocolID,
        },
      })
    ).toJSON();
    const axios = require("axios");
    axios[REST.method](`http://${REST.host}:${REST.port}${REST.path}`, {
      data: {
        package,
        ProtocolID: Device.upProtocolID,
        topic,
      },
    });
    res.sendStatus(202);
  },
  async provisionReturn(req, res) {
    const { sequelize } = require("../sequelize");
    const { Devices } = sequelize.models;
    const keys = Object.keys(req.body);
    for (const key of keys) {
      await Devices.update(
        { isProvision: true, token: req.body[key] },
        {
          where: {
            name: key,
          },
        }
      );
    }
    res.sendStatus(200);
  },
};
module.exports = {
  async post(req, res) {
    const { sequelize } = require("../sequelize");
    const { RepeatableTasks, ReadDeviceData } = sequelize.models;
    // const
    try {
      await sequelize.transaction(async (t) => {
        const result = await RepeatableTasks.create(req.body, {
          transaction: t,
          include: [ReadDeviceData],
        });
        return result;
      });
      const pm2 = require("pm2");
      pm2.connect(() => {
        pm2.restart("core");
      });
      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  },
  async get(req, res) {
    const { sequelize } = require("../sequelize");
    const { RepeatableTasks, ReadDeviceData } = sequelize.models;
    try {
      const result = await RepeatableTasks.findAll({
        include: [ReadDeviceData],
      });
      return res.send(result);
    } catch (err) {
      res.sendStatus(400);
    }
  },
};

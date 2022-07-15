module.exports.post = async function (req, res) {
  const { Tasks } = require("../database");
  try {
    await Tasks.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
module.exports.get = async function (req, res) {
  const { Tasks } = require("../database");
  try {
    const result = await Tasks.getBootTasks(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

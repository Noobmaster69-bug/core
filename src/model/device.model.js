const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const devices = sequelize.define(
  "devices",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upProtocol: {
      type: DataTypes.STRING,
    },
    downProtocol: {
      type: DataTypes.STRING,
    },
    startTime: {
      type: DataTypes.DATE,
    },
    isProvision: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isPersistence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  devices,
};

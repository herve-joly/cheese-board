//Model definition
const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Cheese = sequelize.define("Cheese", {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = Cheese;

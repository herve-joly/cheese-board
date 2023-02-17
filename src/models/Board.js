//Model definition
const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Board = sequelize.define("Board", {
  type: DataTypes.STRING,
  description: DataTypes.STRING,
  rating: DataTypes.NUMBER,
});

module.exports = { Board };

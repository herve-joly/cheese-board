//Model definition
const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = { User };

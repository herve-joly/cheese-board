const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");

// One to Many relationship
User.hasMany(Board);
Board.belongsTo(User);

// Many to Many relationship
Board.belongsToMany(Cheese, { through: "union" });
Cheese.belongsToMany(Board, { through: "union" });

module.exports = { User, Board, Cheese };

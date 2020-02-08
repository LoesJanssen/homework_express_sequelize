const database = require("../sequelize-rest");
const Sequelize = require("sequelize");

const Movie = database.define("movie", {
  title: Sequelize.STRING,
  yearOfRelease: Sequelize.INTEGER,
  synopsis: Sequelize.TEXT
});

module.exports = { Movie };

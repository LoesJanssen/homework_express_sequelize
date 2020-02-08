const sequelizeRest = require("../sequelize-rest");
const Sequelize = require("sequelize");

const Movie = sequelizeRest.define("movie", {
  title: Sequelize.STRING,
  yearOfRelease: Sequelize.INTEGER,
  synopsis: Sequelize.STRING
});

sequelizeRest
  .sync()
  .then(() =>
    Movie.create(
      { title: `Movie title ${title}` },
      { yearOfRelease: `The year of release ${new Date()}` },
      { synopsis: `The synopis is ${synopsis}` }
    )
  )
  .then(() => Movie.findAll())

  .then(movieArray =>
    console.log(
      "All movies: ",
      movieArray.map(m => m.dataValues)
    )
  )
  .catch(err => console.error(err));

module.exports = { Movie };

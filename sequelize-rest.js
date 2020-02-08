const Sequelize = require("sequelize");
const sequelizeRest = new Sequelize(
  "postgres://postgres:secret@localhost:5432/postgres"
);

sequelizeRest
  .sync({ force: true })
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = sequelizeRest;

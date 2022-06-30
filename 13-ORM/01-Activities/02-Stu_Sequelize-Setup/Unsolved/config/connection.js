const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "library_db",
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;

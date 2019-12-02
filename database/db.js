const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("crud", "root", "", {
    host: 'localhost',
    port: 3306,
    dialect: "mysql",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
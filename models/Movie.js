const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    'product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            required: true
        },
        description: {
            type: Sequelize.STRING,
            required: true
        },
        category: {
            type: Sequelize.STRING,
            required: true
        },
        image: {
            type: Sequelize.STRING,
            required: true
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
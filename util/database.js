const Sequelize = require("sequelize")

const sequelize = new Sequelize("express-crud", "root", "Gtr@vels123", {
    dialect: "mysql",
    host: "localhost",
})

module.exports = sequelize

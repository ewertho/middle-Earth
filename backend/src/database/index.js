const Sequelize = require('sequelize')
const db_config = require('../config/database')

const User = require('../models/User')
const PLaces = require('../models/Places')

const connection = new Sequelize(db_config)

User.init(connection)
PLaces.init(connection)

User.associate(connection.models)
PLaces.associate(connection.models)

module.exports = connection
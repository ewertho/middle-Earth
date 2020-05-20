const Sequelize = require('sequelize')
const db_config = require('../config/database')

const User = require('../models/User')
const PLaces = require('../models/Places')
const Voting = require('../models/Voting')

const connection = new Sequelize(db_config)

User.init(connection)
PLaces.init(connection)
Voting.init(connection)

Voting.associate(connection.models)
User.associate(connection.models)
PLaces.associate(connection.models)

module.exports = connection
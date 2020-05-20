'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('votting', { 
      id:{
        type: Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: true
      },
      numbers: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'users', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      places_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'places', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('users');

  }
}

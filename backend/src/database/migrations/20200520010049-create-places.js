'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('places', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      img:{
        type: Sequelize.BLOB('long'),
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {model: 'users', key:'id'},
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
    
    return queryInterface.dropTable('places')
  }
}

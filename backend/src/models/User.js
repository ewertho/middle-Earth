const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.hasMany(models.Places, {foreignKey:'user_id', as: 'places'} )
    }
}

module.exports  = User
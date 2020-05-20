const {Model, DataTypes} = require('sequelize')

class Voting extends Model{
    static init(connection){
        super.init({
            numbers: DataTypes.INTEGER
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.hasMany(models.User, {foreignKey:'user_id', as: 'owner'})
        this.hasMany(models.Places, {foreignKey: 'places_id', as:'site'})
    }
}

module.exports  = Voting
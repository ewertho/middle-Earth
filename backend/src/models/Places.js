const {Model, DataTypes} = require('sequelize')

class Places extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.BLOB('long'),
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey:'user_id', as: 'owner'})
    }
}

module.exports  = Places
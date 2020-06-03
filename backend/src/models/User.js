const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            virtualPassword: DataTypes.VIRTUAL,
            password: DataTypes.STRING
        },{
            sequelize: connection
        },{hooks: {
            beforeSave: async user => {
              if (user.virtualPassword) {
                user.password = await bcrypt.hash(user.virtualPassword, 8);
              }
            }
          }
        })
    }

    static associate(models){
        this.hasMany(models.Places, {foreignKey:'user_id', as: 'places'} )
    }
}

User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password);
}

User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
}
module.exports  = User
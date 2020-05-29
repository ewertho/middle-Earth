const User = require('../models/User')
const Op = require('Sequelize').Op

module.exports={

    async search(req, res){
        const mail = req.body.email
        const pass = req.body.password
        console.log(req.body)
        const user = await User.findAll({attributes: ['email', 'password'],where:{email:mail, password:pass}})
        //.then((data)=>console.log(data)).catch(error=>console.log(err))
        if(user.length === 0){
            return res.status(404).send('user not found')
        }else{
            return res.status(200).json(user)
        }
    },

    async store(req, res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        var create = false

        const userFind = await User.findAll({attributes: ['name','email'],where:{[Op.or]: [{name:name}, {email:email}]}})
        
        if(userFind.length === 0){
            create = true
            const userCreate = await User.create({name, email, password})
            return res.status(200).send(create)
        }else{
            
            return res.status(404).send(create)
        }
        
    }
}

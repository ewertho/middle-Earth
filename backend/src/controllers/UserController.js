const User = require('../models/User')

module.exports={

    async search(req, res){
        const mail = req.body.email
        const pass = req.body.password
        const user = await User.findAll({where:{email:mail, password:pass}})
        if(user===null){
            return res.status(404).send('user not found')
        }else{
            return res.status(200).send('is here!')
        }
    },

    async store(req, res){
        const {name, email, password} = req.body
        const user = await User.create({name, email, password})
        return res.json(user)
    }
}

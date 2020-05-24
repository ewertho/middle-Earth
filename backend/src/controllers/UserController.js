const User = require('../models/User')

module.exports={

    async search(req, res){
        const name = req.body.name
        const pass = req.body.password
        const user = await User.findOne({where:[name]})
        if(user===null){
            res.status(404).send('user not found')
        }else{
            res.status(200).send('is here!')
        }
    },

    async store(req, res){
        const {name, email, password} = req.body
        const user = await User.create({name, email, password})
        return res.json(user)
    }
}

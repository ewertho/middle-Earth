const bcrypt = require('bcrypt-nodejs')
const jwt  = require('jsonwebtoken')
const auth = require('../config/auth.json')
const User = require('../models/User')
const Op = require('Sequelize').Op

module.exports={

    async authenticate(req, res){
        const {email, password} = req.body
        
        const user = await User.findAll({attributes: ['id','email', 'password'],where:{email}})
        
        if(user.length === 0){
            return res.status(404).send('user not found')
        }else{
            
            if(!await bcrypt.compare(password, user.password)){
                return res.status(404).send({error: 'Invalid password!'})
            }else{
                const token = jwt.sign({id: user.id}, auth.secret, {expiresIn: 86400})

                return res.status(200).send({user, token})
            }
            
        }
    },

    async register(req, res){
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        try{
            if(!await User.findAll({attributes: ['name','email'],where:{[Op.or]: [{name:name}, {email:email}]}})){
                return res.status(404).send({error:'User alredy exists!'})
            }else{
                const userCreate = await User.create({name, email, password})
                if(!userCreate){
                    return res.status(401).send({error: 'Failed!'})
                }else{
                    return res.status(200).send(userCreate)
                }
                
            }
        }catch (err){
            return res.status(404).send({error:'Register failed'})
        }        
    }
}

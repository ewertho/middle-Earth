const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const auth = require('../config/auth.json')
const User = require('../models/User')
const Op = require('Sequelize').Op

module.exports={

    async authenticate(req, res){
        const {email, password} = req.body
        
        const userRequest = await User.findOne({attributes: ['id','email', 'password'],where:{email}})

        if(!userRequest){
            return res.status(404).send('user not found')
        }else{
            
            bcrypt.compare(password, userRequest.password, (err, result)=>{
                if(err==true){
                    return res.status(401).send({err})
                }
                if(result == true){
                    const token = jwt.sign({id: userRequest.id}, auth.secret, {expiresIn: 86400})
                    return res.status(200).send({userRequest, token})
                }else{
                    return res.json({success: false, message: 'passwords do not match'})
                }
                
            })
            
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
                
                const passcrypt = bcrypt.hashSync(password, 8)
                const userCreate = await User.create({name, email, password: passcrypt})
                
                return res.status(200).send(userCreate)
            }
        }catch (err){
            return res.status(404).send({error:'Register failed'})
        }        
    }
}

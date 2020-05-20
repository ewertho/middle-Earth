const Place = require('../models/Places')
const User = require('../models/User')


module.exports = {
    
    async index(req, res){
        const {user_id} = req.params
        const user = await User.findByPk(user_id,{
            include: {association:'places'}
        })
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }
        return res.status(200).json({sucess: 'sucess, found places'})
    },


    async store(req, res){
        const {user_id} = req.params
        const {name, img} = req.body
        
        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        await Place.create({
            name, 
            img,
            user_id
        })

        return res.status(200).send('Place registered successfully')
    }
}
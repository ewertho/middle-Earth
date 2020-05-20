const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')
const PlacesController = require('./controllers/PlacesController')

//routers in session
router.get('/logged/:user_id/earth', PlacesController.search)
router.post('/logged/:user_id/earth', PlacesController.store)

router.put('/logged',(req, res)=> {

})

router.delete('/logged',(req, res)=> {

})

//start session
router.get('/login/signin', UserController.search)
router.post('/login/signup', UserController.store)

module.exports = router
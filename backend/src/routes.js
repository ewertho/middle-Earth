const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')
const PlacesController = require('./controllers/PlacesController')

//routers in session of place
router.get('/logged/:user_id/earth', PlacesController.index)
router.post('/logged/:user_id/earth', PlacesController.store)
router.put('/logged/:user_id/earth',PlacesController.alter)
router.delete('/logged/:user_id/earth', PlacesController.remove)

//start session
router.post('/login/signin', UserController.search)
router.post('/login/signup', UserController.store)

module.exports = router
const port = 3000

const express = require('express')
const app = express()

const passport = require('passport')
const session = require('express-session')

require('./database/index')


//Jsons
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//passport
app.use(session({ secret: 'my precios',resave: true, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())

const routes = require('./routes')
app.use(routes)


app.listen(port,() => {
    console.log(`Server is running at localhost:${port}`)
})
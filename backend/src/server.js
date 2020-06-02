const port = 5000

const express = require('express')
const app = express()

const passport = require('passport')
const session = require('express-session')
const allowCors = require('./cors')
const bodyParser = require('body-parser')

require('./database/index')


//Jsons
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//passport
app.use(session({ secret: 'myprecios', resave: true, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(allowCors)

const routes = require('./routes')
app.use(routes)


app.listen(port,() => {
    console.log(`Server is running at localhost:${port}`)
})

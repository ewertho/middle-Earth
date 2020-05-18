const port = 3000

const express = require('express')
const app = express()

const passport = require('passport')
const session = require('express-session')
const bodyParser = require("body-parser")

//use database
const conn = require('./data/database')
const tables = require('./data/tables')
const query = require('./data/querys')

//bodyParser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//passport
app.use(session({ secret: 'my precios',resave: true, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())

//create tables at server startup
conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('conectou')
    }
    tables(conn)
    
})

//defined routers
const router = express.Router()
app.use('/', router)

//routers
router.get('/login/signin',(req, res)=> {

    query.select(req, res)
})

router.put('/login/signin',(req, res)=> {

    query.select(req, res)
})

router.delete('/login/signin',(req, res)=> {

    query.select(req, res)
})

//start session
router.get('/login/signin',(req, res)=> {

    query.select(req, res)
})

router.post('/login/signup',(req, res)=>{
    
    if(query.insert(req)){
        console.log(error)
        return res.status(400).send('Something broke!')
    }else{
        console.log('adicionou registros!')
        res.status(200).send(req.body)
    }
})


app.listen(port,() => {
    console.log(`Server is running at localhost:${port}`)
})
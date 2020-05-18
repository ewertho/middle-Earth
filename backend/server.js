const port = 3000

const express = require('express')
const app = express()

const passport = require('passport')
const session = require('express-session')
const bodyParser = require("body-parser")

//sequelize
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('middleearth', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
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

/* conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('conectou')
    }
    tables(conn)
    
}) */

//defined routers
const router = express.Router()
app.use('/', router)

//routers
router.get('/logged',(req, res)=> {

    query.select(req, res)
})

router.post('/logged',(req, res)=> {

    query.select(req, res)
})

router.put('/logged',(req, res)=> {

    query.select(req, res)
})

router.delete('/logged',(req, res)=> {

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
const conn = require('./database')

function delet(req){
    sql= ``
    conn.query(sql, (error, results, fields)=>{
        return
    })
}

function alter(req){
    sql= ``
    conn.query(sql, (error, results, fields)=>{
        return
    })
}

function select(req, res){
    const name = req.body.name
    const pass = req.body.password
    const sql = `SELECT Name, Password FROM Client WHERE Name = '${name}' AND Password = '${pass}'`

    conn.query(sql, (error, results, fields)=>{
        if(error){
            res.json(error)
        }else{
            res.json(results)
        }
    })
}

function insert(req){

    const name = req.body.name
    const pass = req.body.password
    const sql = `INSERT INTO Client(Name, Password) VALUES('${name}', '${pass}')`

    conn.query(sql,(error, results, fields)=>{
        return error
    })
}

module.exports = {insert, select, delet, alter}
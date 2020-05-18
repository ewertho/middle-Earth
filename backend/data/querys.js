const conn = require('./database')

function delet(req){
    sql= `DELETE Places FROM Client WHERE `
    conn.query(sql, (error, results, fields)=>{
        return
    })
}

function alter(req){
    sql= `UPDATE `
    conn.query(sql, (error, results, fields)=>{
        return
    })
}

function select(req, res){
    const name = req.body.name.substring(0,150)
    const pass = req.body.password.substring(8,64)
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

    const name = req.body.name.substring(0,150)
    const pass = req.body.password.substring(8,64)
    const sql = `INSERT INTO Client(Name, Password) VALUES('${name}', '${pass}')`

    conn.query(sql,(error, results, fields)=>{
        return error
    })
}

module.exports = {insert, select, delet, alter}
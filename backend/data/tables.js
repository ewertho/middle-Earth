const conn  = require('./database')


const sqlPlace =        "CREATE TABLE IF NOT EXISTS Place (\n"+
                        "ID_place int NOT NULL AUTO_INCREMENT,\n"+
                        "Name varchar(150) NOT NULL,\n"+
                        "Place_img longblob NOT NULL,\n"+
                        "PRIMARY KEY (ID_place)\n"+
                        ");"

const sqlClient =       "CREATE TABLE IF NOT EXISTS Client (\n"+
                        "ID_client int NOT NULL AUTO_INCREMENT,\n"+
                        "Name varchar(150) NOT NULL,\n"+
                        "Password varchar(64) NOT NULL,\n"+
                        "Places int NULL,\n"+
                        "PRIMARY KEY (ID_client)\n"+
                        ");"

const sqlVoting =       "CREATE TABLE IF NOT EXISTS Voting (\n"+
                        "ID_voting int NOT NULL AUTO_INCREMENT,\n"+
                        "User_id varchar(150) NOT NULL,\n"+
                        "Place_id longblob NOT NULL,\n"+
                        "Number_of_voting int NOT NULL,\n"+
                        "PRIMARY KEY (ID_voting)\n"+
                        ");"

const fk = ""          
module.exports = (conn)=>{

    conn.query(sqlPlace, (error, results, fields)=>{
        (error) ? console.log(error) :  console.log('create table place')
    })
    conn.query(sqlClient, (error, results, fields)=>{
        (error) ? console.log(error) : console.log('create table client')
    })
    conn.query(sqlVoting, (error, results, fields)=>{
        (error) ? console.log(error) : console.log('create table voting')
    })
}
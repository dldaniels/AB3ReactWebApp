const dinodb = require('./DbConfig');
const mysql = require('mysql');

const connect = mysql.createConnection({
    host: dinodb.DB_HOST,
    user: dinodb.DB_USER,
    password: dinodb.DB_PW,
    database: dinodb.DB_DATABASE
});

function addDinosaur(name,type){
    var mysql = 'INSERT INTO \'dinosaurs\' (\'name\', \'type\') VALUES ('${name}','${type}')';
    connect.query(mysql, function(err, result){
        if(err) throw err;
        console.log('added to table');
    })
    return 200;

}

function getAllDinosaurs(callback){
    var mysql = "SELECT * FROM dinosaurs";
    con.query(mysql, function(err,result){
        if (err) throw err;
        console.log("Getting all Dinosaurs...");
        return(callback(result));
    });
}

module.exports = {addTransaction ,getAllTransactions,}


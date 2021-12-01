// npm init
// npm install mysql
var conf = require('./config')
const mysql = require('mysql');

var connection = mysql.createConnection(conf.database);
connection.connect(function (err) {
    if(err) throw err;
    console.log("Database connection successfull !!!");
});

module.exports = connection;

// npm init
// npm install mysql

const mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    port:"8889",
    user:"root",
    password:"root",
    database: "glow_events"
});
connection.connect(function (err) {
    if(err) throw err;
    console.log("Database connection successfull !!!");

    //Execut query
    connection.query("INSERT INTO events(title,city) values ('Opening ceremony','Sydney')",function (err,result) {
        if(err) throw err;
        console.log("Event created successfully");
    });
})
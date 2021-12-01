
var connection = require('../Connect/db_connection');

//Execute query
connection.query("INSERT INTO events(title,city) values ('Opening ceremony','Sydney')",function (err,result) {
    if(err) throw err;
    console.log("Event created successfully");
});


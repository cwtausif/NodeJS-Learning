

var connection = require('../Connect/db_connection');

connection.query("INSERT INTO events(title,city) values('Random Event','Lahore')",function (err,result) {
    if(err) throw err;
    console.log("Inserted successfull !!! ID = "+result.insertId); 

});
var connection = require('../Connect/db_connection');

//pagination
connection.query("SELECT * from events LIMIT 3 OFFSET 1",function (err,result) {
    if(err) throw err;
    console.log(result);
})
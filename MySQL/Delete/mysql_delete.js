var connection = require('../Connect/db_connection');

connection.query("DELETE FROM events where id=1",function (err,result) {
    if(err) throw err;
    //Result object
    console.log(result);
    //Affected rows
    console.log(result.affectedRows);
})
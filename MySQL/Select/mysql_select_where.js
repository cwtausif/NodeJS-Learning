var connection = require('../Connect/db_connection');

connection.query("SELECT * FROM events where id > 1",function (err,result,fields) {
   if(err) throw err;
   //Result
   console.log(result); 
});

var connection = require('../Connect/db_connection');


connection.query("SELECT * from events",function (err,result,fields) {
    if(err) throw err;
    console.log(result);
    //The Result Object
    console.log(result[0].title);
    //The fields object
    console.log(fields);

    //Name of the first fields
    console.log(fields[0].name);
})

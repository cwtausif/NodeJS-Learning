var connection = require('../Connect/db_connection');

connection.query('Update events set title = "Fun Event" where id = 2',function (err,result) {
    if(err) throw err;
    //Result
    console.log(result);

    //Records updated
    console.log(result.affectedRows);
})
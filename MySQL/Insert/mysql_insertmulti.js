
var connection = require('../Connect/db_connection');
var sql = "INSERT INTO events(title,city) values ?";
var values = [
    ['Event 1',"London"],
    ["Event 2","New York"]
];
connection.query(sql,[values],function (err,result) {
    if(err) throw err;
    console.log("Multi inserted successfull !!! "+result.affectedRows+" New Records Added");
});
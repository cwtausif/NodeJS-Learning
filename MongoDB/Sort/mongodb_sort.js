//npm install mongodb   
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017"
MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb')
    //Sort by name Alphabatically
    // var sortObj = {name: 1} //Ascending
    var sortObj = {name: -1} //Dcending
    dbObject.collection('workers').find().sort(sortObj).toArray(function (err,result) {
        if(err) throw err
        console.log(result);
    })
})
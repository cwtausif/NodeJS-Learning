//npm install mongodb

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb:mongodb://127.0.0.1:27017/';

MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    var databaseObject = db.db('mydb');
    databaseObject.createCollection("workers",function (err,res) {
        if(err) throw err;
        console.log("Collection created successfully !!!");
    });
});
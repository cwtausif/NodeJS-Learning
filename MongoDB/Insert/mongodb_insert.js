//npm install mongodb

var MongoClient = require("mongodb").MongoClient;

var url = 'mongodb://127.0.01:27017/';

MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    var dbObject = db.db('mydb');
    var workerObj = {name:"John", email:"john@company.com",phone:"+123456789"};
    
    dbObject.collection("workers").insertOne(workerObj,function (err,res) {
        if(err) throw err;
        console.log("Worker added successfully !!!");      
        db.close();
    })
    
})
//npm install mongodb

var MongoClient = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb') 
    dbObject.dropCollection('workers',function (err,object) {
        if(err) throw err
        console.log(object);
        db.close()
    })
    
})
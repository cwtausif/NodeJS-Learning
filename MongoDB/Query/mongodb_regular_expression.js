// npm install mongodb

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb')
    //regular expression
    var query = {name: '/^W/'}
    dbObject.collection('workers').find({query}).toArray(function (err,result) {
        if(err) throw err
        console.log(result);
        db.close();
    })
})
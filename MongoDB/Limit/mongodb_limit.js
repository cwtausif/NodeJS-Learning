// npm install mongodb

var MongoClient = require('mongodb').MongoClient

var url  = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb')
    var limit = 5, offset = 1
    dbObject.collection('workers').find().skip(offset).limit(limit).toArray(function (err,result) {
        if(err) throw err
        console.log(result); // All results
    })
})
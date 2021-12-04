//npm install mongodb

var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://127.0.0.1:27017'
MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb')
    var query = {name:/^w/}
    var value = {$set: {name:'updated names'}}
    dbObject.collection('workers').updateOne(query,value,function (err,result) {
        if(err) throw err
        console.log(result);
        console.log(result.matchedCount) // Matched Count
        console.log(result.modifiedCount) // Modified Count
        db.close();
    })
})
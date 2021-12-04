//npm install mongodb

var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url,function (err,db) {
    if(err) throw err
    var dbObject = db.db('mydb')


    var query = {email:'worker2@company.com'}
    var values = { $set: {name: 'Worker One'}}
    dbObject.collection('workers').updateOne(query,values,function (err,result) {
        if (err) throw err
        console.log(result);
        console.log(result.modifiedCount) //Modified Rows
        console.log(result.matchedCount) // Rows Matched
        console.log(result.acknowledged); //Acknnowledged
    })
})
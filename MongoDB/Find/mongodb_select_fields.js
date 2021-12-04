//npm install mongodb

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    
    var dbObject = db.db('mydb')
    //SELECT Fields 0 to omit 
    var fieldsObj = {_id: 0,name: 1, email: 1};
    dbObject.collection('workers').find({},{projection : fieldsObj}).toArray(function (err,result) {
        if(err) throw err
        console.log(result);
        db.close();
    })
    
})
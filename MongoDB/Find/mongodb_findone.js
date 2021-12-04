// npm install mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,function (err,db) {
    var dbObject = db.db('mydb');
    
    //object param to find
    var workerEmail = {
        email: 'worker1@company.com',
    }
    dbObject.collection('workers').findOne(workerEmail,function (err,result) {
        if(err) throw err;
        if(result!=null){
            console.log(result.name);
        }else{
            console.log("Worker not found");
        }
        db.close();
    });
});

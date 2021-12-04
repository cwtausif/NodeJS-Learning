//npm install mongodb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

//database connection
MongoClient.connect(url,function (err,db) {
    
    var dbObject = db.db("mydb");
    var workers = [
        {
            name: "worker 1",
            email: "worker1@company.com",
            phone: "+9123456788"
        },
        {
            name: "worker 2",
            email: "worker2@company.com",
            phone: "+9123456788"
        },
        {
            name: "worker 3",
            email: "worker3@company.com",
            phone: "+9123456788"
        }
    ];

    //Inserting all workers
    dbObject.collection("workers").insertMany(workers,function (err,res) {
        if(err) throw err;
        console.log("Number of workers registered: "+res.insertedCount);
        db.close()
    })
});
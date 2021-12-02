var MongocClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017/mydb";

MongocClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
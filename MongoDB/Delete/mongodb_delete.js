//npm install mongodb
var MongoClient = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url,function (err,db) {
    if (err) throw err
    var dbObject = db.db('mysql')
    var delObj = {email: 'ali@company.com'}

    //delete One
     dbObject.collection('workers').deleteOne(delObj,function (err,obj) {
      if (err) throw err
      console.log(obj);  //deletedCount
    })

    //delete many
    var del = { email: /^W/ };
     dbObject.collection('workers').deleteMany(del,function (err,obj) {
        if(err) throw err
        console.log(obj);
        db.close();
    })
})
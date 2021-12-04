// npm install mongodb
/*
MongoDB is not a relationa DB
lookup => Left Outer Join
*/
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbObject = db.db("mydb");

  dbObject.collection("jobs").aggregate([
    {
      $lookup: {
        from: "workers",
        localField: "worker_id",
        foreignField: "_id",
        as: "jobdetails",
      },
    },
  ]).toArray(function (err,response) {
      if(err) throw err
      console.log(JSON.stringify(response)); //response [{"_id":"61abaa8198c5cd5b14506855","worker_id":"61ab999a2866d666c45f8937","job_title":"First Job","jobdetails":[]}]
  })
})

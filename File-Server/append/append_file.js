
var fs = require('fs');
//Append data to existing files (It will create file if file don't exists already)

fs.appendFile("append_file.html","New content appended !!!",function (err) {
    if(err) throw err;
    console.log("Updated");
})
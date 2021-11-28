var fs = require('fs');


//Rename existing file
fs.rename("test.html","index.html",function (err) {
    if(err) throw err;
    console.log("Renamed successfully...");
})
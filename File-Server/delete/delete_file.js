var fs = require("fs");
fs.unlink("delete.html",function (err) {
    if(err) throw err;
    console.log("File deleted.");
})
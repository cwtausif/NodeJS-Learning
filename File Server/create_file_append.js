var fs = require('fs');
//Apend > If file already exists it will append new data in same file
fs.appendFile('fruits.html','<b>Apple</b><del>Banana</del',function (err) {
    if(err) throw err;
    console.log("File Created successfully");
})

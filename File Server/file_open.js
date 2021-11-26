var fs = require('fs');

fs.open("open.html",'w',function (err) {
    if (err) throw err;
    console.log("Saved Successfully!");
});
var fs = require('fs');

fs.writeFile("write_file.html","<h3>Computer Science<h3>",function (err) {
    if(err) throw err;
    console.log("File written succssfully.");
});
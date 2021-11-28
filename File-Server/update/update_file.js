var fs = require('fs');
fs.writeFile("update.html","<h1>Write file will update all previous content</h1>",function (err) {
    if(err) throw err;
    console.log("Updated");
})
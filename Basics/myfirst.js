
// require is used to load modules
var http = require('http');

// load date module
var dt = require('./myfirstmodule');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Date and Time: "+dt.myDateTime());
    res.end();
}).listen(8080);
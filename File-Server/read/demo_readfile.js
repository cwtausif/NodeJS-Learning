//fs stand for File Server
var fs = require('fs');
var http = require('http');

// The fs.readFile() method is used to read files on your computer.

http.createServer(function (req,res) {
    fs.readFile('countries.html',function (err,data) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();        
    });
    
}).listen('8080');

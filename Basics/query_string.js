var http = require('http');
var url = require('url');


http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":'text/html'});
    
    //Parse Query Parameters
    var q = url.parse(req.url, true).query;
    var output = q.name+"   "+q.email;

    res.end(output);
}).listen('8080');
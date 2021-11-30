var uc = require('upper-case');
var lc = require('lower-case');
var http = require('http');


http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase("a qucik brown fox jumps over the lazy dog"));
    res.write('<br>');
    res.write(lc.lowerCase("Hello GOOD MORNING"));
    return res.end();
}).listen('8080');
var http = require('http');
var url = require('url');
var fs = require('fs');

//Creating Menu
var head = "<h1>Welcome to sports Website</h1>";
var menu = "<ul style='list-style-type:none';>";
    menu += "<li><a href='/'>Home</a></li>";
    menu += "<li><a href='cricket.html'>Cricket</a></li>";
    menu += "<li><a href='hockey.html'>Hockey</a></li>";
    menu += "</ul>";
    head +=menu;

http.createServer(function (req, res) {
    var u = url.parse(req.url, true);
    var page =u.pathname;
    console.log(page);

    if (page == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(head);
        res.write("<h1>Home of sports !!!</h1>");
        return res.end();
    }
    page = "." + page;

    fs.readFile(page, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(head);
            return res.end("404 Page not found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(head);
        res.write(data);
        return res.end();
    });

}).listen('8080');

/*
create web server so for a browser to navigate to "localhost:8080/about"
include HTTP, URL modules
*/

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  console.log('request ', req.url);
  var q = url.parse(req.url, true).query;
  var filePath = "." + q.pathname;
  if (filePath == './') {
      filePath = './about.html';
  }

  fs.readFile(filePath, function(err, stuff) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(stuff);
      return res.end();
  });
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
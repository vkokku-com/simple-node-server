var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');

}).listen(9000);
console.log('server is running on port 9000');

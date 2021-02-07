let http = require('http');
let dt = require('./modules/utils')
let url = require('url')
var fs = require('fs');
http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type':'text/text' });
            return res.end(q.pathname + " 404 Not Found!");
    }
    res.writeHead(200, { 'Content-Type':'text/text' });
    res.write(data);
    return res.end();
    });
}).listen(8080);
console.log('listening ...');

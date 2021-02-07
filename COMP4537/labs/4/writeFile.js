let http = require('http');
let dt = require('./modules/utils')
let url = require('url')
var fs = require('fs');
http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.appendFile('file.txt',  q.query["text"], function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
}).listen(8080);
console.log('listening ...');
let http = require('http');
let dt = require('./modules/utils')
let url = require('url')
var fs = require('fs');
http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.appendFile('file.txt',  q.query["text"], function (err) {
        if (err) console.log('error!');
        console.log('Updated!');
    });
}
).listen(process.env.PORT || 3000);
console.log('listening ...');
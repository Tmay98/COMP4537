let http = require('http');
let dt = require('./modules/utils')
let url = require('url')
var fs = require('fs');
http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    let text = q.query["text"];
    if (text) {
        fs.appendFile('file.txt', q.query["text"], function (err) {
            if (err) return res.end('Error please enter text');
            return res.end('file.txt updated');
        });
    }
    else{
        return res.end("Error enter text please")
    }
}
).listen(process.env.PORT || 3000);
console.log('listening ...');
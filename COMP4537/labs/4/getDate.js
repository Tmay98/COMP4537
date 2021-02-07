let http = require('http');
let dt = require('./modules/utils')
let url = require('url')
http.createServer(function (request, response) {
    let q = url.parse(request.url, true);
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello ' + q.query["name"] + ', Here is the server\'s current date and time: ' + dt.date());
    response.end();
}
).listen(process.env.PORT || 3000);
console.log('listening ...');

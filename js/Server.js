var http = require('http');
var url = require('url');

function messageRecieved(request, response) {
    console.log('got a message');
    let path = url.parse(request.url, true);
    console.log(path.pathname);
    response.write('hello');
    response.end();
}

server = http.createServer(messageRecieved);
server.listen(3000);

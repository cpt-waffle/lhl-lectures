// vanilla server

const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Request:", request.url);
    if (request.url === '/eth') {
        response.end("Buy ETH");
    } else if (request.url === '/dogs') {
        response.end("Woof!");
    } else if (request.url === '/money') {
        response.end("here's $20!")
    } else {
        response.end('hello world!!');
    }
})

server.listen(8080, () => {
    console.log(`Server is on and listening on port 8080`);
})
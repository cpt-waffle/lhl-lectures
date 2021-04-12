// using a built in library, we will build a server
// built in library - http
const http = require('http');

// createServer method() --- this is where we write our instructions on the door ( routes )
const server = http.createServer((request, response) => {
  console.log("URL", request.url);
  console.log("METHOD", request.method);
  if (request.url === '/' && request.method === 'GET') {
    response.end('<html><body><h1>hello world!!</h1></body></html>');
  } else if (request.url === '/first' && request.method === 'GET') {
    response.end("first page")
  } else if (request.url === '/second' && request.method === 'GET') {
    response.end('second page')
  } else {
    response.end("route does not exist :(");
  }
})


// listen method() --- when we finish defining our instructions, we will listen
// to people that come to the door with requests
server.listen(8080, () => {
  console.log("server is on!!");
})


console.log(" :) ");
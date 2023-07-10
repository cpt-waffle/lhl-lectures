const http = require('http');


const server = http.createServer((request, response) => {
  console.log("Someone has connected!");
  // response.setEncoding('utf8');
  console.log(request.url);
  if (request.url === '/') {
    return response.end('Welcome to my homepage!')
  } else if (request.url === '/banana-muffins') {
    return response.end('🍌 🧁')
  } else if (request.url === '/hello') {
    return response.end("hi!");
  } else {
    return response.end("route not found :(");
  }
});


server.listen(8080, () => console.log("Server is on!")); 
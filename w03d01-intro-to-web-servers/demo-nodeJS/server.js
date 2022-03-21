const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === '/helpimstuck') {
    response.end("Now you are free!");
  }
  else if (request.url === '/moo') {
    response.end("find the cow!");
  }
  else if (request.url === '/formula1') {
    response.end('Formula Dank!');
  } else {
    response.end('every other URL that i have not figured out yet!!');
  }
})
// every server needs to listen to connections once all the logic has been initialized

server.listen(8080, () => {
  console.log("server is up and running!");
})
// Express JS

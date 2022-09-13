// :)

const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    response.end("Welcome to my site")
  } else if (request.url === '/hello') {
    response.end("hi");
  } else if (request.url === '/isthiscoding') {
    response.end('yes!')
  } else {
    response.end('page not found :(')
  }
  // routes 
})


// every server needs to listen to requests

server.listen(8080, () => {
  console.log("Server is running :)")
})
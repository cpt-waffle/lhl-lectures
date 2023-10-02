
const http = require('http');


const server = http.createServer((request, response) => {
  console.log("someone has connected!");
  console.log(request.url);
  if (request.url === '/') {
    return response.end('<h1>welcome to my homepage</h1>');
  } else if (request.url === '/hi') {
    return response.end('hi');
  } else if (request.url === '/wazza') {
    return response.end('wazzzaaaaaaaa');
  } else if (request.url === '/banana') {
    return response.end('🍌');
  } else {
    return response.end(':(');
  }
});


server.listen(8080, () => console.log("Server is on!"));
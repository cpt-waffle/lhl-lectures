const http = require('http');

const server = http.createServer((request, response) => {
  console.log("Someone has connected!");
  console.log(request.url);
  if (request.url === '/') {
    return response.end('Welcome to my homepage');
  } else if (request.url === '/hello') {
    let i = 0;
    i++;
    return response.end(`hello ${i}`);
  
  } else if (request.url === '/testing') {
    return response.end('testing worked :)')
  } else if (request.url === '/cats') {
    return response.end('meow :)');
  } else {
    return response.end('no route exists :(');
  }
})



server.listen(8080,() => console.log("Server is on, and listening!"));
const http = require('http');

const server = http.createServer((request, response) => {
  // what should i do now?
  console.log(request.url);
  if (request.url === '/') {
    response.end('Welcome to my home page!');
  } else if (request.url === '/hi') {
    response.end('hello !')
  } else if (request.url === '/help') {
    response.end("help is on its way!")
  } else {
    response.end('Hello There!');
  }
})


// listen
server.listen(8080, () => {
  console.log(`Server is on!`);
})

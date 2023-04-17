const http = require('http');

const server = http.createServer((request, response) => {
  console.log("someone has connected!");
  console.log(request.url);
  if (request.url === '/') {
    response.end('welcome to my homepage')
  } else if (request.url === '/helloworld') {
    response.end("hello back!");
  } else if (request.url === '/help') {
    response.end("coffee break soon!~");
  } else {
    response.end('i got nothing for this :(');
  }
})




server.listen(8080, () => {
  console.log("Server is on!");
})
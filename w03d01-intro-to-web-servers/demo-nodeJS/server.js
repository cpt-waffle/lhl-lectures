// require the server library
const http = require('http');

// initialize the server...         
const server = http.createServer((request, response) => { // Request, Response
  // Request <--- peice of paper that you(client) slide under the door
  // response <--- peice of papaer that the server slides back to you under the door.
  console.log(request.url);
  console.log(request.method);
  // TCP  <--- you kept connected and waited for messages
  // HTTP <--- you connect, make a request, get a response, disconnect!
  if (request.url === '/' && request.method === 'GET') {
    response.end('Hello world!!');
  } else if (request.url === '/memes' && request.method === 'GET') {
    response.end('<a href="https://i.imgflip.com/3w5th4.jpg"> some image </a>');
  } else {
    response.end('wrong link my dude!');
  }

})

// we want the server to listen...
server.listen(8080, () => {
    console.log("Server is online on port: 8080");
})
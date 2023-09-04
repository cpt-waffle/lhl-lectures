
const http = require('http');


const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    return response.end('<h1>Welcome to my homepage</h1>');
  } else if (request.url === '/hello') {
    return response.end("Good Morning!!");
  } else if (request.url === '/hi') {
    return response.end("hi!");
  } else if (request.url === '/banana') {
    return response.end("🍌");
  } else {
    return response.end("nothing found :(");
  }
})



server.listen(8080, () => console.log('Server is now on!'));
const http  = require('http');
const PORT = 8081;


const server = http.createServer(function(request, response) {
  console.log('executing this');
  return response.end("hello world");
});


server.listen(PORT, () => {
  console.log(`Server listening on : http://localhost:${PORT}`);
});
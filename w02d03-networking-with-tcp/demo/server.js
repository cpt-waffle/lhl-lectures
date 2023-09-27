const net = require('net');

console.log('Server :)');


const clients = [];

const server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  console.log("Someone has connected");
  clients.push(socket);
  socket.on('data', data => {
    console.log(data);
    clients.forEach(client => {
      client.write(data);
    })
  })
})

server.listen(3001, () => {
  console.log("Server is live and listening for connections!");
})
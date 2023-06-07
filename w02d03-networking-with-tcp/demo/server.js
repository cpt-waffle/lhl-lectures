const net = require('node:net');

const connections = [];
const server = net.createServer((client) => {
  console.log("someone has connected!");
  client.setEncoding('utf8');
  connections.push(client);
  client.on('data', data => {
    // console.log(data);
    connections.forEach(client => {
      client.write(data);
    })
  })
})

server.listen(3001, () => console.log("Server is on 3001"));
const net = require('net');


const clients = [];
const server = net.createServer((client) => {
  console.log("someone has connected!");
  // console.log(client);
  clients.push(client);
  client.setEncoding('utf8');
  client.on('data', data => {
    console.log("someone has sent me a message:");
    // console.log(data);
    clients.forEach(client => {
      client.write(data);
    })
  })
  // event listeners

})

//            port
server.listen(3001, () => {
  console.log("Server is on!");
})
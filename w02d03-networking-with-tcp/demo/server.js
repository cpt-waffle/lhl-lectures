// SERVER!!!
const net = require('net');

// a connection between a client and server

const users = [];

// create server (hosting it)
const server = net.createServer((socket) => {
  // socket is a connection between client and server
  console.log("someone new connected!");
  // socket.write lets us write back to the connect client 
  socket.write('Welcome to my Server :)');
  socket.setEncoding('utf8');

  // we collect all connections that connect to so that we can mass message them
  users.push(socket);

  // setInterval(() => {
  //   socket.write('interupting cow goes moo!');
  // }, 2000);

  // when data comes back from any client ( someone has sent us a message!)
  socket.on('data', (data) => {
    console.log("data has come in!!");
    // console.log(data);
    // we loop through every connection we stored
    users.forEach(user => {
      // for every connection we send a message back (to each connection/client)
      user.write(data);
    })
  })

})

// server starts and waits for connections!
server.listen(3001, () => {
  console.log('server is on!');
})

const net = require('net');

const users = [];

const server = net.createServer((socket) => {
  console.log("Someone new has connected!");
  socket.setEncoding('utf8');
  users.push(socket);

  socket.on('data', data => {
    // console.log('data has come in!');
    // console.log(data);

    users.forEach(user => {
      user.write(data);
    })
  })
})


server.on('error', err => {
  console.log(" :(  error happened");
  console.log(err);
})

// waits for connections, waits for other computers to show up and connect
server.listen(3001, () => {
  console.log("Server is on and listening :)");
})
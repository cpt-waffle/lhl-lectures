// Server -- the computer that waits for something/someone to connect
// Node Net package

const net = require('net');
const sockets = [];

const server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  sockets.push(socket);
  socket.on('data', (data) => {
    console.log(data);
    sockets.forEach(socket => {
      socket.write(data);
    })
    // loop through all of my connections (users/sockets)
    // and im going to fire back all the messages to you all (users)
  })

  // client.write('Name: waffle')
  // client.write('Move: Up')
  // client.write('Move: Down')
})


// Server is now LISTENING for things to connect

// 1 -server/program == 1 port 
// 2 servers/programs != 1 port
server.listen(3001, () => {
  console.log("Server is listening on port 3001 :)");
})
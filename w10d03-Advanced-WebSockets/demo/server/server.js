const PORT = 8080;
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const ikea = require('ikea-name-generator');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const users = [];

//                  a connection between A and B
io.on('connection', (socket) => {
  console.log('Hello There?');
  const name = ikea.getName();
  socket.name = name;
  users.push(name);
  //           msg type              payload
  socket.emit('INITIAL_CONNECTION', { name, users });
  socket.broadcast.emit('NEW_USER', { name });

  socket.on('SEND_MSG', payload => {
    console.log("send msg!");
    console.log(payload);
    io.emit('SEND_MSG', payload);
  })


  socket.on("disconnect", (reason) => {
    console.log("name", socket.name);
    console.log(":( disconnect");
    socket.broadcast.emit('DISCONNECT', { name: socket.name });
  });
})

/////////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.json({foo: 'bar'});
});


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

const PORT = 8080;
const http = require('http');
const express = require("express");
/// require socket.io
const socketio = require('socket.io');
const ikea = require('ikea-name-generator');


const app = express();
//////////////
const server = http.createServer(app);
const io = socketio(server);
const users = [];

/// server listeners
io.on('connection', (socket) => {
  console.log("someone has connected!!");
  const name = ikea.getName();
  users.push(name);
  socket.user = name;
  socket.emit('INITIAL_CONN', {name, users});
  socket.broadcast.emit('NEW_USER', {name});

  socket.on('SEND_MSG', (data) => {
    console.log("message was sent!");
    console.log(data);
    io.emit('SEND_MSG', data);
  })

  // socket.on('disconnecting', () => {
  //   console.log("someone has disconnected");
  //   console.log(`it was ${socket.name}`);
  // })
  
})

// client connection




app.get('/', (req, res) => {
  return res.json({greetings: 'hello world'});
})

////////////?
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
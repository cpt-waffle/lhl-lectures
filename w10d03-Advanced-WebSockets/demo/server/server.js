const PORT = 8080;
const express = require('express');
const ikea = require('ikea-name-generator');

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server); // 

// routes
app.get('/', (req, res) => {
  return res.json({greetings: "hello world!"});
})

const users = [];
// event listeners for socket.io
io.on('connection', socket => {
  console.log("someone has connected!!!");
  // emit takes 2 parameters
  // string: action/event name
  // ??????: payload
  const name = ikea.getName(true);
  users.push(name);
  socket.emit('INITIAL_CONN', {name, users});
  socket.broadcast.emit('NEW_USER', {name});

  socket.on('SEND_MSG', payload => {
    console.log('SEND_MSG:', payload);
    io.emit('SEND_MSG', payload);
  })
})


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
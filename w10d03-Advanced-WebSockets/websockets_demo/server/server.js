const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const ikea = require('ikea-name-generator');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = [];

// io
io.on('connection', (socket) => {
  console.log("Someone has connected!");
  // send a message back out to the connection
  // emit takes 2 parameters
  // type -> "string", message -> {object}
  const name = ikea.getName();
  users.push(name);
  socket.emit("INITIAL_CONN", {name: name, users});
  socket.broadcast.emit("NEW_USER", {name});

  socket.on('SEND_MSG', data => {
    console.log("message has come in from client!");
    console.log(data);
    io.emit('SEND_MSG',data);
  })

})

// HTTP 
app.get('/test', (req, res) => {
  res.json({message: 'hello world'});
})


server.listen(8080, () => console.log("Server is listening on port 8080"));
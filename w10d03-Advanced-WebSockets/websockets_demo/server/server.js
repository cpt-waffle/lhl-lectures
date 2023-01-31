// express HTTP
const PORT = 8080;
const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
const ikea = require('ikea-name-generator');

// Socket.io implementation
const { Server } = require('socket.io');
const io = new Server(server);
// time to make your listeners!

// users array
const users = [];

io.on('connection', (socket) => {
  console.log("new user connected!");
  const name = ikea.getName();
  users.push(name);
  socket.emit('INITIAL_CONNECTION', {name, users});

  socket.broadcast.emit('NEW_USER', {name});

  socket.on('SEND_MSG', data => {
    console.log("client has sent us a message!");
    console.log(data);
    io.emit('SEND_MSG', data);
  })

})



app.get('/', (req, res) => {
  res.json({foo: 'bar'});
})


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
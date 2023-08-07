const PORT = 8080;
const express = require('express');
const http = require('http');
const morgan = require("morgan");
const {Server} = require('socket.io');
const ikea = require('ikea-name-generator')

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(morgan('dev'));

// socket.io
const users = [];

io.on('connection', (socket) => {
  console.log("soneone has connected!");
  // a type
  // a payload
  const name = ikea.getName('false');
  users.push(name);
  socket.emit('INITIAL_CON', {username: name, users});
  socket.broadcast.emit('NEW_USER', {newUser: name});

  socket.on('SEND_MSG', payload => {
    console.log(payload);
    io.emit('SEND_MSG', payload);
  })
})


app.get('/test', (req,res) => {
  return res.json({foo: 'bar'});
})

server.listen(PORT, () => console.log(`Server is listening on PORT: `, PORT));
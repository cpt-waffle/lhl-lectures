
const PORT = 8080;
const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const ikea = require('ikea-name-generator');



const app = express();
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: 'http://localhost:5173'}});
let id = 1;
const users = [];

app.get('/', (req, res) => {
  res.json({greetings: 'hello world!'});
})

io.on('connection', socket => {
  console.log('user has connected!');
  const name = ikea.getName();
  users.push(name);
  socket.emit("NEW_CONNECTION", {name, users});
  socket.broadcast.emit("NEW_USER", {name});

  socket.on('SEND_MSG', payload => {
    console.log("SEND_MSG event!");
    console.log(payload);
    io.emit('SEND_MSG', {...payload, id});
    id++;
  })
})


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
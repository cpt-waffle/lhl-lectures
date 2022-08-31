const PORT = 8080;

const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const ikea = require('ikea-name-generator');

const app = express();
const server = http.createServer(app);
// to add socket io, just wrap app(express) in http.createServer
// and pass it into socketio()
/////////////////////////
const io = socketio(server);
let users = [];
let i = 1;

io.on('connection', socket => {
  const name = ikea.getName();
  users.push({name, id: i});
  i++;
  console.log("Name is", name)
  socket.emit('INITIAL_CONNECTION',{name, users});
  socket.broadcast.emit('NEW_USER', {name, id: i});

  socket.on('SEND_MESSAGE', msg => {
    console.log(msg);
    io.emit('SEND_MESSAGE', msg);
  })

})

///////////////////////////

app.get('/', (req, res) => {
  res.json({greeting: 'hello world!'});
})


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

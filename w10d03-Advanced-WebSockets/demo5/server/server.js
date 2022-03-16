const express = require('express');
const ikea = require('ikea-name-generator');
// Step 1: declare socket io
const socketio = require('socket.io');
// Step 2: require/declare (http) 
const http = require('http');

const app = express();
// Step 3:  we need wrap APP  in the HTTP.createServer() function
const server = http.createServer(app);

// Step 4: wrap server in socketio()
const io = socketio(server);

let users = [];
// Step 5: add your socketio listeners !!!
io.on('connection', (socket) => {
  console.log("Someone has connected!");
  // console.log(socket);
  const name = ikea.getName();
  users.push(name);
  socket.emit('INITIAL', {name, users});
  socket.broadcast.emit("NEW_USER", {name});
  socket.name = name;

  socket.on('disconnect', () => {
    console.log('Someone has disconnected!', socket.name);
    socket.broadcast.emit("DISCONNECT_USER", {name: socket.name});
    users = users.filter(name => name !== socket.name);
  })

  socket.on('message', (data) => {
    console.log("message came back from client!");
    console.log(data);
    socket.broadcast.emit("MESSAGE", data);
  })
})


//////////////////////////////////////////

app.get('/', (req,res) => {
  res.json({result: 'ok'});
})

server.listen(8080, () => console.log(`Server is listening on port 8080`));
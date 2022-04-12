//express, morgan, nodemon
// socket.io
const PORT = 8080;
// actioncable
// rails
// nodeJS
// react
const express = require('express');
// Step 1: declare socket.io
const socketio = require('socket.io');
// Step 2: require http
const http = require('http');
const ikea = require('ikea-name-generator');

const app = express();
// Step 3: wrap the app in the HTTP createServer();
const server = http.createServer(app);

const io = socketio(server);
// someone has connected listener!

let users = [];
io.on('connection', socket => {
  console.log("someone has connected!");
  // first param stands for MESSAGE TYPE
  // payload
    const name = ikea.getName();
    users.push(name);
    socket.emit('INITIAL', {name, users});
    socket.name = name;
    socket.broadcast.emit('NEW_USER_CONNECTION', name);

    socket.on('disconnect', (data) => {
      console.log(data);
      console.log('someone has disconnected!!', socket.name);
      users = users.filter( name => name !== socket.name);
      socket.broadcast.emit('DISCONNECT', socket.name);
    })

    socket.on('CLICKED', (data) => {
      console.log("someone has a clicked the button!");
    })
})



app.get('/', (req, res) => {
  res.json({hello:'world'});
})

// listen not app, but SERVER
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
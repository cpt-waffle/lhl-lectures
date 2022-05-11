const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const ikea = require('ikea-name-generator');
// STEP 0: install socket.io // EITHER in npm i or
// add it to the package.json with specific ver

// STEP 1: require socket.io
const socketio = require('socket.io');
// STEP 2: require http
const http = require('http');
const app = express();
// STEP 3: WRAP app in th HTTP createServer function
const server = http.createServer(app);
// STEP 4: use socket.io to make a socket server at the same http server/port
const io = socketio(server);
// in this demo we are using socket.io ver 2.3.0
// socket.io is currently on ver 5 
// biggest difference is new ver has their messages encrypted and whitelisted
// origins, methods object when creating the server
////////////// v5
// const io = socketio(server, {
//   cors: {
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST"],
//   }
// });
//////////////

// Socket.io // Real Time 
// Listeners  -- Someone connected?
//            -- someone sent a message?
//            -- someone disconnected ?
//////////////////////////////////////////////////////////////////
let usersList = [];
io.on('connection', socket => {
  console.log("Someone has Connected!!");
  const name = ikea.getName();
  socket.name = name;
  console.log("new name for the connected user is: ", name);
  usersList.push(name)

  socket.emit('INITIAL_CONNECTION', { name, usersList });
  socket.broadcast.emit('NEW_USER', { name });

  socket.on('disconnect', () => {
    console.log('someone has has disconnected');
    console.log(socket.name);
    usersList = usersList.filter( user => user !== socket.name);
    socket.broadcast.emit('DISCONNECTED_USER', { name: socket.name });
  })
})
///////////////////////////////////////////////////////////////////
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({foo:'bar'});
})

// STEP 5: Change APP.listen TO SERVER.listen
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
const PORT = 8080;

const express = require('express');
//3 require socket.io
const { Server }= require('socket.io');
//1  add http module
const http = require('http');
const morgan  = require('morgan');

const ikea = require('ikea-name-generator');

const app = express();
//2 wrap app in http.createServer
const server = http.createServer(app);
//4 wrap SocketIo server with http server
const io = new Server(server);

app.use(morgan('dev'));

// ws + wss
// socket.io

app.get('/', (req,res) => {
  return res.json({hello: 'world!'});
})

/////////////////// IO LISTENERS //////////////////////
const users = [];

io.on('connection', socket => {
  console.log("Someone has Connected!!!");
  const name = ikea.getName(false);
  users.push(name);
  socket.emit('INITIAL_CONNECTION', {name, users});
  socket.broadcast.emit('NEW_USER', {name});

  socket.on('SEND_MSG', payload => {
    console.log("Message recieved from client!");
    console.log(payload);
    io.emit('SEND_MSG', payload);
  })
})





//5  server.listen 
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
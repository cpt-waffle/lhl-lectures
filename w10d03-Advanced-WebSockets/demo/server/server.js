const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const ikea = require('ikea-name-generator');


const app = express();
const server = createServer(app);
const io = new Server(server, {cors: {
  origin: "http://localhost:5173"
}});

app.get('/', (req, res) => {
  return res.json({message: 'hello world'});
})
////// using socket.io

const users = [];
let id = 1;

io.on('connection', (socket) => {
  console.log("Hi there!");
  //       a message type:string, payload:object
  const user = ikea.getName();
  users.push(user);
  socket.emit('USER_CONNECTED', { user, users });
  socket.broadcast.emit('NEW_USER_CONNECTED', { user });


  socket.on('SEND_MSG', payload => {
    console.log(payload);
    const newMessage = {...payload, id}
    id++;
    io.emit('NEW_MSG', newMessage);
  })
})



server.listen(8080, () =>  console.log("Server is on and listening on port 8080"));
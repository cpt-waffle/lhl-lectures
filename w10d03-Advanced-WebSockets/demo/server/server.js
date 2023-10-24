const PORT = 8080;
const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const ikea = require('ikea-name-generator');


const app = express();
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: 'http://localhost:5173'}});


// socket ---> is a connection between a server and a client
const users = [];
let id = 1;

io.on('connection', socket => {
  console.log('someone has connected');
  setTimeout(() => {
    const name = ikea.getName();
    users.push(name);
    socket.emit("NEW_CONNECTION", { name, users});
    // what about all the other users who are here?
    socket.broadcast.emit('NEW_USER', { name });
  }, 3000);

  socket.on('SEND_MSG', payload => {
    console.log("message has come in!");
    console.log(payload);
    io.emit('SEND_MSG', {id, ...payload});
    id++;
  })

})

app.get("/", (req, res) => {
  return res.json({greetings: 'Hello World!'});
})

server.listen(PORT, () => console.log(`Server is listening on PORT:`, PORT));
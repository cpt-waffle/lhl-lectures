const PORT = 8080;
const express = require('express');
const ikea = require('ikea-name-generator');

// ------
const {createServer} = require('node:http');
const { Server } = require('socket.io');

// ------
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: {origin: "http://localhost:5173"}});
// ------

app.get('/test', (req, res) => {
  return res.json({hello: 'world'});
})

const users = [];
let id = 1;
// ------
io.on('connection', (socket) => {
  const name = ikea.getName();
  console.log(name);
  users.push(name);
  // TYPE, payload
  socket.emit('NEW_CONNECTION', { name, users});
  socket.broadcast.emit('NEW_USER', { name });
  console.log("someone has connected!");

  socket.on("SEND_MESSAGE", payload => {
    console.log("message has been sent by some client!");
    console.log(payload);
    io.emit("NEW_MESSAGE", {id, ...payload});
    id++;
  })
})

// ------
server.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

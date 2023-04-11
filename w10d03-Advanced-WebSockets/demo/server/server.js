const PORT = 8080;

const express = require('express');
const morgan  = require('morgan');
const http    = require('http');
const { Server } = require('socket.io');
const ikea = require('ikea-name-generator');

const app = express();
const server = http.createServer(app);

// initializing socket.io server
const io = new Server(server);

const users = [];

io.on('connection', (socket) => {
  // 2 parameters
  // message type, payload
  const name = ikea.getName()
  users.push(name);
  socket.name = name;
  socket.emit('INITIAL_CONNECTION', {name, users});
  socket.broadcast.emit('NEW_USER', { name });
  socket.on('SEND_MSG', payload => {
    console.log("SEND_MSG", payload);
    io.emit('SEND_MSG', payload);
  })
})
/////////////////////////////////

app.use(morgan('dev'));


app.get('/', (req, res) => {
  return res.json({foo: 'bar'});
});

server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
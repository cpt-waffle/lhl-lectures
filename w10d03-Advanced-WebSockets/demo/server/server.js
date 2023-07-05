const PORT = 8080;
//1) npm install socket.io 

const express = require('express');
const http    = require('http'); // <--
const morgan = require('morgan');
const {Server} = require("socket.io"); // <---

///
const ikea = require('ikea-name-generator');

const app = express();
const server = http.createServer(app); // <---

app.use(morgan('dev'));

const io = new Server(server) // <--


const users = [];

io.on('connection', (socket) => {  // <--
  console.log("connected!");
  //        event_Type,   payload {}
  const name = ikea.getName(false);
  users.push(name);
  socket.emit('INITIAL_CONN', {name, users});
  // sending a message to a connected user

  socket.broadcast.emit('NEW_USER', {name});

  socket.on('SEND_MSG', (payload) => {
    console.log("SEND_MSG");
    console.log(payload);
    io.emit('SEND_MSG', payload);
  })

})



app.get('/test', (req,res) => {
  return res.json({foo: 'bar'});
})

app.get('/cats', (req,res) => {
  return res.json({cat: 'Mr Meows'});
})


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
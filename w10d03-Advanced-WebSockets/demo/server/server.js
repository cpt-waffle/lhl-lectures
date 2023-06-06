const PORT = 8080;
const express = require('express');
const morgan = require('morgan'); 
const http = require('http');              // <-------
const { Server } = require("socket.io");   // <-------

const ikea = require('ikea-name-generator');


// Ws with Wss
// Socket.io <---

const app = express();
const server = http.createServer(app);  // <-------
const io = new Server(server);          // <-------
/////////////////////////Socket.io///////////////////
const users = [];

io.on('connection', socket => {
  console.log("someone has connected :)");
  const user = ikea.getName(false);
  //                          {user: user}
  users.push(user);
  socket.emit('INITIAL_CONN', { user, users });
  socket.broadcast.emit('NEW_USER', {user});

  socket.on('SEND_MSG', payload => {
    console.log('send_msg');
    console.log(payload);
    io.emit('SEND_MSG', payload);
  })

})


/////////////////////////////////////////////////////
app.use(morgan('dev'));
app.get('/test', (req,res) => {
  return res.json({foo: 'bar'});
})

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
// ^--------
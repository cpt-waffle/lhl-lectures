// server
const PORT = 3001;
const net = require('net');


const users = [];
const server = net.createServer((user) => {
  user.write('Hello From the server!!!!');
  user.setEncoding('utf8');
  users.push(user);
  user.on('data', (data) => {
    // console.log(data);
    users.forEach(user => {
      user.write(data);
    })
  })

  console.log("Someone has connected!");
})


server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

// servers WAIT for things to happen
// servers LISTEN for actions

// one server per one port


// Snek Game

/// You are given a server
// you are building the client

// connect to the snake server
// give the snake a name conn.write('Name: WAFFLE')
// connect movement commands to a way to pass them to server
//         conn.write('Move: Up')
//         conn.write('Move: Down')

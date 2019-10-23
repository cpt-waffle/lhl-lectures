const net = require('net');

const server = net.createServer();
const users = [];

console.log("Server is on.....");

//can you notify when someone connects?!?!?!?
//when someone connects to my server Run this cool function!!!!
server.on('connection', function(user) {
  console.log("Someone has connected!!!");
  user.write('Welcome to the LHL w2d3 chat!!!');
  users.push(user);
  // console.log(user);
  // user.on('data')
  // we need LISTEN for the DATA event on THE CONNECTION
  user.setEncoding('utf8');
  user.on('data', function(data) {
    // console.log("data has come in!!!!", data);
    broadcast(data);
  })

  user.on('end', function() {
    console.log('someone has disconnected!!!!');
    users.splice(users.indexOf(user), 1);
  })
});


const broadcast = function(data) {
  for (let user of users) {
    user.write(data);
  }
}

// server.on('data', function(data) {
//   console.log('data came in', data);
// })




server.listen(3000);







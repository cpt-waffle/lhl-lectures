// const net = require('net');
// const server = net.createServer();

// const clients = [];

// server.on('connection', connection => {
//   console.log('someone has connected!');
//   clients.push(connection);
//   connection.setEncoding('utf8');
//   connection.on('data', data => {
//     console.log(data);
//   })

//   connection.on('end', data => {
//     console.log('disconnected');
//     console.log(data);
//     clients.splice(clients.indexOf(connection), 1);
//     console.log(clients);
//   })
// })



// server.listen(3000);

const net = require('net');
const server = net.createServer();
const users = [];


server.on('connection', user => {
  console.log("someone has connected!");
  user.setEncoding('utf8');
  users.push(user);
  user.on('data', data => {
    console.log("someone wrote: ", data);
    broadcast(data);
  })

  user.on('end', () => {
    console.log("disconnected!!");
  })
})


const broadcast = (data) => {
  for (let user of users) {
    user.write(data);
  }
}

console.log('server starting...');
server.listen(3000);
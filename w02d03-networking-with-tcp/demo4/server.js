const net = require('net');
const server = net.createServer();
let number = 0;
const users = [];


const broadcast = (data) => {
  for (let user of users) {
    user.write(data);
  }
}

server.on('connection', (user) => {
  number++;
  user.write('Hello User!');
  console.log("Someones Connected!! number ", number);
  user.setEncoding('utf8');
  users.push(user);
  user.on('data', (data) => {
    broadcast(data);
    console.log("Anon wrote: ", data);
  })

  user.on('end', () => {
    console.log("someone has disconnected!");
    users.splice(users.indexOf(user), 1);
  })
})


console.log("Server is on.....!");
server.listen(3000);
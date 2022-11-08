// SERVER!!!

const net = require('net');


const users = [];
const server = net.createServer((user) => {
  console.log("someone has connected!!!");
  users.push(user);
  user.write('Welcome to my Server!');
  // setInterval(() => {
  //   user.write('are you still there?');
  // }, 400)
  user.setEncoding('utf8');
  user.on('data', (msg) => {
    // console.log(msg);
    users.forEach(user => user.write(msg));
  })

})


server.listen(3001, () => {
  console.log("server is on!");
})
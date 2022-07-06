const net = require('net');
                               // user 
// our messages are totally ENCRYPTED
// nobody else can read them

const users = [];
const server = net.createServer((socket) => {
  users.push(socket);
  console.log("Someone has Connected!");
  socket.setEncoding('utf8');
  socket.write('Welcome to the Chat Server!!!');
  socket.on('data', (data) => {
    console.log("data has come in from our users!");
    // console.log(data);
    // 
    users.forEach(user => {
      user.write(data);
    })
  })
})
//            PORT
server.listen(3001, () => {
  console.log("server is bound!");
})

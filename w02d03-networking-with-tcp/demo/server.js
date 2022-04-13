// create a server 
// and make sure that server listens to other computers connections
const net = require('net');
const users = [];

let num = 0;
//                              
const server = net.createServer((connection) => {
  connection.setEncoding('utf8');
  users.push(connection);
  num++;
  console.log("someone has connected!", num);
  connection.write(`You are ${num}!`);
  
  connection.on('data', (data) => {
    users.forEach(user => {
        console.log('data', data);
        user.write(data);
    })
  })

})

server.listen(3001, () => {
  console.log('Server just turned on!');
})
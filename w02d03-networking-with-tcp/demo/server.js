const net = require('net');

// your connection between you and the server
// ^ the client parameter
const users = [];

const server = net.createServer((client) => {
  
  console.log("Someone has connected :)");
  // console.log(client)
  client.setEncoding('utf8');
  users.push(client);
  client.on('data', (data) => {
    console.log("data has come in!");
    // console.log(data);
    users.forEach(user => user.write(data));
  })

  // setInterval(() => {
  //   client.write('Hello from server :)');
  // }, 2000);

})

//            PORTS
server.listen(3001, () => console.log("Server is on :)"));
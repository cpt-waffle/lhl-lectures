const net = require('net');
const server = net.createServer();
const users = [];

server.on('connection', (client) => {
  // console.log(client);
  console.log("Someone has connected!");
  users.push(client);
  client.setEncoding('utf8');
  client.on('data', (msg) => {
    console.log("New Message!!!");
    console.log(JSON.parse(msg));
    console.log("-------------------");
    for (let user of users) {
      user.write(msg);
    }
  })

  client.on('end', () => {
    users.splice(users.indexOf(client), 1);
  })
})





server.listen(3001, () => console.log("Server is online!"));
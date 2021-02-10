const net = require('net');
const server = net.createServer();
const users = [];


// If your computer is a building
// and ports are rooms
// HOW do we get to your building?
// ip address (local) On MY HOME NETWORK
// ip MY CITY

//           PORT, CB

server.on('connection', (client) => {
//   console.log(client);
  users.push(client);
  //[1,2,5]
  console.log('someone has connected!!!');
  client.setEncoding('utf8');
  client.on('data', (data) => {
      
    console.log(data);
      for (let user of users) {
          user.write(data);
      }
  })

  client.on('end', () => {
      console.log("-----Someone Disconnected-----");
      console.log("Goodbye :(");
      users.splice(users.indexOf(client), 1);
      // anytime a user disconnets
      // remove em out of the array
  })


})



server.listen(3001, () => {
    console.log("Server is listening on port 3001");
})
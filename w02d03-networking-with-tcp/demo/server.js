// Server
const net = require('net');
const users = [];

// create a server with event listeners
const server = net.createServer((connection) => {
  users.push(connection);
  // console.log(connection);
  console.log('Someone has connected!!');
  connection.setEncoding('utf8');
  // event listener for incoming data
  connection.on('data', (data) => {
    // for loop to broadcast every message
    //back to every client
    for (let user of users) {
      user.write(data);
    }
    console.log("DATA HAS COME IN!!!!!!");
    console.log(data);
  })

  // event listner for disconnects disconnects..
  connection.on('end', () => {
    console.log('Someone Disconnected!');
    users.splice(users.indexOf(connection), 1);
  })
});


// to start the server we need to make it listen
server.listen(3001, () => {
  //            ^------ PORT
  console.log("Server is listening....");
})
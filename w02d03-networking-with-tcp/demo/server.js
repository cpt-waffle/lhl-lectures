// Server 
const net = require('net');
const users = [];
// We create a server (with all of the default options)
const server = net.createServer(function(connection) {
  console.log("Someone has connected!");
  connection.setEncoding('utf8');
  users.push(connection);
  connection.on('data', function(data) {
    for (let user of users) {
      user.write(data)
    }
    console.log("---------------");
    console.log(data);
    // connection.write('Hi welcome to Vas Chat Server!!!');
  })


  connection.on("end", function() {
    users.splice(users.indexOf(connection), 1);
    console.log("SOMEONE HAS DISCONNECTED :( ")
  })
})

// We make the server LISTEN to connections....
server.listen(3001, function() { // PORT
  console.log("Server is Listening!!!");
})
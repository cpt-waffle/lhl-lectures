const net = require('net');
// require a module to be able to collect your typing from your keyboard 
const keyboard = require('./keyboard');

const client = net.createConnection({host: 'localhost', port: 3001});
//       ^instead of localhost
//       ^use my IP i shared in zoom

client.setEncoding('utf8');

client.on('connect', () => {
  console.log("You have connected!");
  console.log("Welcome :)");
})

client.on('data', (data) => {
  console.log("data came from server");
  console.log(data);
})

keyboard.setKeyboard(client);

// to send a message from the client to server
// you will use a function called. .write()



// setInterval(() => {
//   client.write("HELLO!!!!!");
// }, 2000);
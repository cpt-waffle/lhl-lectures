const net = require('net');
const client = net.createConnection({host: 'localhost', port: 3001});
const user = "Anon";
const setkeyboard = require('./keyboard');

// snek game

//client.write

// move a snake one way to verify it works 
// setInterval(() => {
//   client.write('ring ring ring ring ring banana phone!');
// }, 1000);


client.write('ring ring ring ring ring banana phone!');

// data comes back from the server
client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
})

setkeyboard(client, user);


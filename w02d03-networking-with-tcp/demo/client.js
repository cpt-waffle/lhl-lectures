// Client
const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

// to connect to the server we need
// port and host
const client = net.createConnection({
  port: 3001,
  host: 'localhost'}, () => {
  console.log("Connection established!");
})

client.setEncoding('utf8');

const name = 'Vas';
// write() function sends data to server
client.write(`${name} has connected!!`);

client.write("Name: VAS")

stdin.on('data', (whatYouTyped) => {
  client.write(`${name}: ${whatYouTyped}`);
})

// on() function is a listener for messages that comeback
// from the server
// WE use the "data" event to get back messages from
// the server
client.on('data', (data) => {
  console.log(data);
})

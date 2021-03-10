// CLIENT
const net = require('net');
// use a package from yesterdays works (stdin)
const stdin = process.stdin;
stdin.setEncoding('utf8');
// let the client type the message
// on enter send the message to the server
const client = net.createConnection({
  host: 'localhost',
  port: 3001
})
client.setEncoding('utf8');

client.on("data", (data) => {
  console.log("data came back from server...");
  console.log(data);
})


stdin.on('data', (input) => {
  client.write(input);
})
// WRITE is a way to send messages to the server
// client.write('Whats everyone up 2?');
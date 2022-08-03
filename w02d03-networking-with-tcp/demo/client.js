//client
// socket.io // 
const net = require('net');
// process.stdin ???
const stdin = process.stdin;
const name = 'Anon';
const client = net.createConnection({host: 'localhost', port: 3001});

client.setEncoding('utf8');
// client.write(`${name}: Hello Wolrd!`);

stdin.on('data', (data) => {
  client.write(`${name}: ${data}`);
})

client.on('data', (data) => {
  console.log(data);
})
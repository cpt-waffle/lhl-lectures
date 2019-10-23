console.log('I am the coolest client!!');

const net = require('net');
const stdin = process.stdin;

const client = net.createConnection({
  host: 'localhost',
  port: 3000
});

client.setEncoding('utf8');

client.on('connect', function() {
  client.write("Hello I have connected!!!!");
})

stdin.on('data', function(data) {
  client.write(data);
})

client.on('data', function(data) {
  console.log(data);
})
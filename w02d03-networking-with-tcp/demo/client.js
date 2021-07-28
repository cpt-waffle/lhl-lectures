// Client
const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const client = net.createConnection({
  port: 3001,
  host: 'localhost' // my global ip here...
}, function() {
  console.log("We have connected!!");
})

client.setEncoding('utf8');


const name = 'Vas';
// to send messages to the server, we use .write() command!
client.write(`${name} has connected!!`);

client.on('data', function(data) {
  console.log(data);
})

stdin.on('data', function(whatYouEntered) {
  client.write(`${name} says:  ${whatYouEntered}`);
})


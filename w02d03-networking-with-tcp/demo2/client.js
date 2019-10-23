const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');

const client = net.createConnection({
  host: '172.46.2.44',
  port: 3000
});


client.setEncoding('utf8');
// we are listening for the server to send us something back!!!!
client.on('data', function(data) {
  console.log("data has come to you from server: ", data);
})


// Function to take in keyboard input!!!!!
// and send it out to the server!!!
stdin.on('data', function(data) {
  console.log("I WROTE THIS: ", data);
  client.write(data);
});
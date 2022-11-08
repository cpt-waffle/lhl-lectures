const net = require('net');
const client = net.createConnection({host: 'localhost', port: 3001});
const stdin = process.stdin;

const name = "Vasiliy";

client.setEncoding('utf8');
// event listener

// is a function that waits for something to happenen
// and when it happens.... it runs a callback 

stdin.on('data', (data) => {
  client.write(`${name}: ${data}`);
})

client.on('data', (msg) => {
  console.log(msg);
})

/////////// There will be a snake server hosted by LHL 
// you will need to connect to the snake server
// make the snake move based on the keys you press...
// Name your snake:
// ----------------> client.write("Name: VAS")
// if W move up ---> client.write("Move: Up");
// if S move down
// ....

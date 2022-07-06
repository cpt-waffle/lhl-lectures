// we need to make a connection
// a connects needs 2 things
// ip, port 
const net = require('net');
// process.stdin
const stdin = process.stdin;

const credentials = { host: 'localhost', port: 3001};

const client = net.createConnection(credentials, () => {
    console.log("You have Connected!");
})

const name = 'CPT-WAFFLE';

client.setEncoding('utf8');
client.on('data', (data) => {
    console.log(data);
})

stdin.on('data', (message) => {
    client.write(`${name}: ${message}`);
})

// Snek game ^
// client.write("Move: Up")
// client.write("Move: Down")
// client.write("Name: ____") <----------------------
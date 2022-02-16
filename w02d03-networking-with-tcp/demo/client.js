const net = require('net');
const stdin = process.stdin;

const credentials = {
    port: 3001,
    host: "localhost"    
}

const name = "Vas";

const client = net.createConnection(credentials, () => {
    console.log("We have connected!!");
});

client.setEncoding('utf8');
stdin.setEncoding('utf8');
// to say something to the server use client.write()
client.write(`${name} has connected!`);

client.on('data', (data) => {
    console.log(data);
})

stdin.on('data', (input) => {
    client.write(`${name}:  ${input}`);
})

// add a name to your snake:
// client.write('Name: WAFLE')
// client.write('Move: Up')
// client.write('Move: Down')

const net = require('net');
const stdin = process.stdin;
const name = "Vas";
// connection takes in those "options"
//  host <--- IP city -> building
//  port <--- which the room #
const client = net.createConnection({
  host: 'localhost',
  port: 3001
})
stdin.setEncoding('utf8');
client.setEncoding('utf8');

// sends information to the server...
client.write(JSON.stringify({name}));

stdin.on('data', (input) => {
    client.write(JSON.stringify({name,input}));
})

client.on('data', (data) => {
    parsedData = JSON.parse(data);
    console.log("\x1b[33m",`${parsedData.name} Said: `, parsedData.input);
})

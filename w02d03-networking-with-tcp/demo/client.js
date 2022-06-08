// Client - the computer that connects to a server
const stdin = process.stdin;

const net = require('net');

const credentials = { host: 'localhost', port: 3001 }

const client = net.createConnection(credentials, () => {
    console.log("connected to server!!");
})

const username = 'Anon';
client.write(`User ${username} has connected!`);
stdin.setEncoding('utf8');


stdin.on('data', (input) => {
    client.write(`${username}: ${input}`);
})

client.setEncoding('utf8')
client.on('data', (data) => {
    // console.log("server has sent you data !!!");
    console.log(data);
})

// to send data ( message ) back to the server you will use a function
// called client.write()
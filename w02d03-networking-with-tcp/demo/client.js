const net = require('net');
const stdin = process.stdin;

const credentials = {
    host: 'localhost', // url, or ip
    port: 3001
}

const name = 'Vas';


const client = net.createConnection(credentials, () => {}) // client.connect()
console.log(client);
client.setEncoding('utf8');
client.on('data', (data) => {
    console.log('server just sent you a message!');
    console.log(data);
})

client.write('This is Fine!!!');

stdin.on('data', (input) => {
    client.write(`${name}: ${input}`);
})

// CLient for a snek game
//  zoom + 

// make a connection
// build commands to go up down left right using your keyboard
// client.write('Name: vas')
// whenever you click w ===> client.write("Move: up");
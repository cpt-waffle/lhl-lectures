// Client

// localhost <--- my address
// port <----- 3001
const net = require('net');
const stdin = process.stdin;
const client = net.createConnection({ 
    port: 3001, 
    host: 'localhost'
}, () => {
    console.log("General Kanobi!")
})
const name = 'VAS';

client.setEncoding('utf8');
stdin.setEncoding('utf8');
// sends a message to the server
// these messages can be interpreted as commands...
client.write(`${name} has connected!!!`);

stdin.on('data', (input) => {
    client.write(`${name}: ${input}`)
})

client.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
})

// Change your snek credentials somehow....
.write("Name: dfsf")
.write("Move: Up")
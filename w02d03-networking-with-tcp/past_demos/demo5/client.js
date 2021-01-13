const net = require('net');
const stdin = process.stdin;
const name = 'Vasiliy';

const connection = net.createConnection({
    host: 'localhost',                                   
    port: 3001
});
// LOCALHOST
// LOCAL NETWORK
// GLOBAL NETWORK


connection.write(`its me ${name}`);

stdin.setEncoding('utf8');
stdin.on('data', (input) => {
    console.log("I wrote this:", input);
    connection.write(`${name}: ${input}`);
})


connection.setEncoding('utf8');
connection.on('data', (data) => {
    console.log("Server Wrote:");
    console.log(data);
})
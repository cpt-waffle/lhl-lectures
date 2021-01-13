const name = "Vasiliy";
const net = require('net');
const stdin = process.stdin;
// localhost
// ip

const client = net.createConnection({
    host: 'localhost',
    port: 3001
});



stdin.setEncoding('utf8');
client.setEncoding('utf8');
client.write(`its me ${name}`, );

stdin.on('data', (input) => {
    client.write(`${name}: ${input}`);
})


// on('data') --- do something, when Data got recieved
client.on('data', (data) => {
    console.log(data);
})
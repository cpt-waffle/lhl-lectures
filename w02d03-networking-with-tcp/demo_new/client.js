const net = require('net');
const stdin = process.stdin;
const connection = net.createConnection({
    host: '192.168.0.129',// ip??
    port: 3001,// port?
});
connection.setEncoding('utf8');
// This listener waits for keyboard input
// and on enter .... something happens
stdin.on('data', (input) => {
    //hello

    connection.write(input);
})

connection.on('data', (data) => {
    console.log('data has come in!');
    // console.log(data.name, data.value);
    console.log(data);
})
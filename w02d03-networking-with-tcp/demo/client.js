//  open vscode
// make a new file
// client.js
// and copy the contents of what i've written here

const net = require('net');
const setKeyboard = require('./keyboard');

const client = net.createConnection({host: 'localhost', port: 3001});


const name = "BoB";

client.write(`${name}: Hello world from Bob!!`);

setKeyboard(client, name);


client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
})
const net = require('net');
const setKeyboard  = require('./keyboard');
const user = 'Vasiliy';


const client = net.createConnection({host:'localhost',  port: 3001}, () => {
  console.log("you have connected to server!");
  client.write(`This is ${user}, that is connected!`);
  // name your snake
  //client.write("Name: ___");

  //client.write("Move: Up")
});

setKeyboard(client, user);

client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
})
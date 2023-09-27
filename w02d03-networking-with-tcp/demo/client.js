const net = require('net');
const setKeyboard = require('./keyboard');
const username = 'Waffle';

console.log('Client :)');

const client = net.createConnection(
  {
    host: 'localhost', 
    port: 3001
  }
);

client.write(`${username} has entered the chat!`);

// client.write('Name: Waffle');

// move the snake using setInterval
//  client.write('Move: Up');
setKeyboard(client, username);

client.setEncoding('utf8');
client.on('data', data => {
  console.log(data);
})

// a server thats host an old version snake game (snek.game)



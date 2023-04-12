const net = require('net');
// stdin -- to collect what you type on your terminal

// keyboard controlls, this will track keystrokes and when press enter will send message
const keyboard = require('./controls');

// creates a connection to the server
const client = net.createConnection({host: 'localhost', port: '3001'});

// sets encoding for incoming messages ( so we as a user can undertand them)
client.setEncoding('utf8');


const name = 'Anon';

// whenever the messages come in from the server, THIS callback runs
client.on('data', (data) => {
  // console.log('data has come in!');
  // we print the message that came in (data is the message)
  console.log(data);
})

// we initialzed keyboard here so we can write messages to the server
keyboard.startKeyboard(client, name);


// initial hello the server
client.write(`${name}:  hello there!`);
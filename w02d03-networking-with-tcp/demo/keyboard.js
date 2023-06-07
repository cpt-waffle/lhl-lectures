const { stdin } = require('process');


stdin.setEncoding('utf8');

const setKeyboard = (client, user) => {
  stdin.on('data', (data) => {
    // if keypressed === 'w' client.write("Move: Up")
    // if keypressed === 'a' client.write("Move: Left")
  
    client.write(`${user}:  ${data}`);
  })
}


module.exports = setKeyboard;

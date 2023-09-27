const stdin = process.stdin;
stdin.setEncoding('utf8');

const setKeyboard = (client, username) => {
  stdin.on('data', data => {
    // if key was w ===> client.write('Move: Up');
    // if key was a ===> client.write('Move: Left');
    // if key was s ===> client.write('Move: Down');
    // if key was d ===> client.write('Move: Right');


    client.write(`${username}: ${data}`);
  })
}

module.exports = setKeyboard;
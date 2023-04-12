const stdin = process.stdin;


stdin.setEncoding('utf8');

const startKeyboard = (client, name) => {
  // stdin tracks what you type, when pressed enter key: the callback runs!
  stdin.on('data', (msg) => {
    // console.log("what you typed and press enter:");
    // console.log(msg);
    // sends a message to the sever!
    client.write(`${name}: ${msg}`);
  })
}


module.exports = {startKeyboard};
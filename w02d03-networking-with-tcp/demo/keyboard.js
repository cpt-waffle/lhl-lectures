const stdin = process.stdin;

const setKeyboard = (client) => {
  stdin.on('data', (data) => {
    // what you type in terminal 
    // after you press enter
    // will be sent to the server
    // using the .write command
  
    // if W is pressed --> client.write("Move: Up");
    client.write(data);
  })
}

module.exports = { setKeyboard };
// dont use export default command
// use the es5 module.exports
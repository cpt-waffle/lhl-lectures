const stdin = process.stdin;
stdin.setEncoding('utf8');


const setkeyboard = (client, user) => {
  stdin.on('data', data => {
    // if key was 'w'   client.write('Move: up')
    // if key was 'a'   client.write('Move: left')
    // if key was 's'   client.write('Move: right')
    // if key was 'd'   client.write('Move: down')
  
    client.write(`${user}:  ${data}`);
  })
}

module.exports = setkeyboard;
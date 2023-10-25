const stdin = process.stdin;



const setKeyboard = (client, name) => {
  stdin.on('data', data => {
    client.write(`${name}: ${data}`)
    // if (data === 'w') { client.write("Move: Up")}
  })
}


module.exports = setKeyboard;

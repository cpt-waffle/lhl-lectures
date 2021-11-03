// Server
const net = require('net');
const users = [];

const server = net.createServer((connection) => {
    console.log("Someone has connected!");
    // event listeners
    users.push(connection);
    connection.setEncoding('utf8');
    connection.on('data', (data) => {
        console.log(data);
        // fs.writeFile(data);
        // database.saveConvoMeessage(data)
        users.forEach(user => {
            user.write(data);
        })
    })
})

// listening for connections!!!!
server.listen(3001, () => {
    console.log("Server is listening!!!");
})
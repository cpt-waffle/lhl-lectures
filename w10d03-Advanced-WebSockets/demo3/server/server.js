const PORT = 8080;
const express = require('express');
// Step # 1: declare socket.io
const socketio = require('socket.io');
// Step # 2: require HTTP into our server.
const http = require('http');
const app = express();
// Step # 3: WRAP our express APP withing HTTP server.
const server = http.createServer(app);
const users = [];

// Step # 4: Wrap socket with server
const io = socketio(server); // <---- we have made a can-phone on our server.

const ikea = require('ikea-name-generator');

io.on('connection', (user) => {
    console.log('Someone has connected!');
    const name = ikea.getName(false);
    user.name = name;
    users.push(name);
    user.emit('INITIAL', {name, users});
    user.broadcast.emit('USER_CONNECTED', {users});

    user.emit("WITHIN_COMPONENT", {test: 'FUUUCK'})

    user.on('disconnect', () => {
        const pos = users.indexOf(user.name);
        users.splice(pos, 1);
        console.log(users);
        console.log(user.name, " has disconnected!");
        io.emit('USER_DISCONNECTED', {users}); 
    })
})


app.get('/', (req, res) => res.json({status: 'ok'}));

// Change from app to server bellow
server.listen(PORT, () => console.log("Server is Listening on PORT ", PORT));
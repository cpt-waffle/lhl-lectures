const PORT = 8080;
const express = require('express');
//  Step 1: declare, Socket.io, http
const socketio = require('socket.io');
const http = require('http');
const ikea = require('ikea-name-generator');
console.log(ikea.getName());
/////////////////////////////////////
const app = express();
// we wrapped Express app in the HTTP
const server = http.createServer(app);
// We wrap server in socketIo.
const io = socketio(server);

const users = [];


io.on('connection', socket => {
    const name = ikea.getName();
    socket.name = name;
    //  SAVE MSG TO DB
    socket.emit('initial', {name , js: 'console.log("hello world")'});
    users.push(name);

    io.emit('NEW_USER', { users });
    console.log("someone has connected!");

    socket.on('disconnect', () => {
        io.emit('DISCONNECTED_USER', {user: socket.name});
    })

})



app.get('/', (req, res) => {
    res.send('Hello World!');
})

// CORS
// server is hosted on 8080 
// client is hosted on 3000
// client makes a request, server checks the DOMAIN and it sees it doesnt match
// server throws a hissy fit  


server.listen(PORT, () => console.log(`Server is Listening on PORT: ${PORT}`));
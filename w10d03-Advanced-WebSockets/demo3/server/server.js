const PORT = 8080;
const ikea = require('ikea-name-generator');
const users = [];
// Step 1: declare socket.io
const socketio = require('socket.io'); // npm i socket.io
// Step 2: require HTTP into our server
const http = require('http');
const express = require('express');

const app = express();
// Step 3: create server with our express
const server = http.createServer(app);

// Step 4: Wrap our server in the socketIO package server
const io = socketio(server);

io.on('connection', socket => {
    console.log("someone has connected!!!");
    const newName = ikea.getName();
    users.push(newName);
    socket.name = newName;
    socket.emit('initial', {user: newName});
    // pg.query('INSERT INTO users VALUE ($1)', [newName]).then(() => {
        socket.broadcast.emit('user_connected', {newUser: newName});
    //}
    socket.on('chat_message', msg => {
        console.log(msg);
        io.emit('chat_message', msg);
    })

    socket.on('disconnect', () => {
        io.emit('disconnected_user', {user: socket.name});
    })

})


app.get('/', (req,res) => {
    res.send("ok")
})

app.get('/users', (req,res) => res.json({users}));


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
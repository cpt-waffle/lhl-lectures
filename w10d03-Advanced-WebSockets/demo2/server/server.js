const express = require('express');
// STEP 1 get socket.io required
const socketio = require('socket.io');
// STEP 2 require HTTP into our server.
const http = require('http');
const PORT = 8080;

const app = express();
// STEP 3 wrap http with app
const server = http.createServer(app);

// STEP 4 wrap socket with server above
const io  = socketio(server);


const ikea = require('ikea-name-generator');

app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

const users = [];


io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(ikea.getName(false));
    // made user name
    let user = ikea.getName(false)
    users.push(user);
    // send user name to our connection client
    socket.user = user;
    socket.emit('initial',{name: user, users});
    // when anyone connects, NOTIFY EVERYONE WHO's connected that someone else has connected!
    socket.broadcast.emit('user_connected', { users });
    socket.on('greetings', data => {
        console.log("Message recieved");
        console.log(data);
    })


    socket.on('disconnect', () => {
        console.log("user has disconnected!");
        console.log('DISCONNECTED USER, ', socket.user)
        let position = users.indexOf(socket.user)
        users.splice(position,1);
        io.emit('user_disconnected', {users});
    })
});



// STEP 5 - server.listen instead of app.listen!
server.listen(PORT, () => console.log('Server is listening on ', PORT));
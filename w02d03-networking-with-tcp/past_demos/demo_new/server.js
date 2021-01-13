const net = require('net');
const server = net.createServer();
const users = [];
//       IP  <<<---- internet protocol
//      local ip and global ip
//            PORT

const broadcast = (data) => {
    for (let user of users) {
        user.write(data);
    }
}


server.on('connection', (socket) => {
    socket.setEncoding('utf8');
    users.push(socket);
    console.log("someone has connected!?!");
    socket.write('hello and welcome to my server!!!!');
    socket.on('data', (data) => {
        // console.log("socket HAS SENT DATA!?!");
        broadcast(data);
        // console.log('Annon: ', data);
    })

    socket.on('end', () => {
        console.log('someone has disconnected!');
        users.splice(users.indexOf(user), 1);
    })
})


server.listen(3001, () => console.log("Server is online!!")); 
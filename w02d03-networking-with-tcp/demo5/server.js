const net = require('net');
const server = net.createServer();
const users = [];

const broadcast = (data) => {
    for (user of users) {
        user.write(data);
    }
}

server.on('connection', (user) => {
    console.log("someone connected!");
    users.push(user);
    user.setEncoding('utf8')
    user.write('Greetings from my server!! You are now connected!')
    user.on('data', (data) => {
        console.log(data);
        broadcast(data);
    })

    user.on('end', () => {
        console.log("someone disconnected");
        // line 13: we add users to an array so we can send messages back to everyone 
        // line 7: user.write() <---- THIS USER DISCONNECTED => error
        users.splice(users.indexOf(user), 1);
        //
    })

})

server.listen(3001, () =>{
    console.log("My server is on!!! Its running on port 3001");
});
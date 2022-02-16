// You will not have to build the SERVER

const net = require('net');
const users = [];

const server = net.createServer((user) => {
    console.log("Someone has Connected!");
    users.push(user);
    user.setEncoding('utf8');
    user.on('data', (data) => {
        users.forEach(user => {
            user.write(data);
        })
        // console.log('data has come!');
        // console.log(data);
        // user.write('Someone has ');
    })

    user.on('end', ()=> {
        users.forEach(user => user.write("someone has disconnected!"));
    })
});


server.listen(3001, () => {
    console.log("Server is on!");
});
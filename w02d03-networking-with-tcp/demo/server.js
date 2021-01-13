// require net
const net = require('net');
const server = net.createServer();
let number = 0;
const users = [];
// console.log(server);


server.on('connection', (client) => {
// ---------------------^
// this callback has parameter
// and that parameter is A CLIENT 
// that just recently connected up
    client.setEncoding('utf8');
    number++;
    console.log("Someone has connected!!");
    console.log('connected ', number);
    // welcome to my server
    // WRITE -- sends out a message
    // to this exact client
    client.write('Welcome to my memes server!!');
    users.push(client);
    // listeners
    client.on('data', (data) => {
        // console.log(data)
        for (let user of users) {
            user.write(data);
        }
    })
    // listener
    client.on('end', () => {
        users.splice(users.indexOf(client), 1);
    })

})


// servers get initialized 
//and listen to connections 
server.listen(3001, () => {
    console.log("Server is online on port 3001 ");
});
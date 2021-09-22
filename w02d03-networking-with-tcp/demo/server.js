// Server
const { connect } = require('http2');
const net = require('net');
const users = [];

//const test =  () => {....}
// function test() {.....}
const server = net.createServer((user) => {
    console.log("User has connected!");
    // console.log(user);
    
    user.write('General Grevious');
    user.setEncoding('utf8');
    users.push(user);
    // add listner for data...
    user.on('data', (data) => {
        // console.log(data);
        for (let user of users) {
            user.write(data)
        }
    })

    user.on('end', () => {
        users.splice(users.indexOf(user, 1));
        console.log("someone has disconnected!!");
    })

})

// global IP -----------> Router ------------> Computer -----------> PORTS
//                        City  -------------> Building -----------> room number
//            PORT
server.listen(3001, () => {
    console.log("Server is Listening on PORT 3001");
})
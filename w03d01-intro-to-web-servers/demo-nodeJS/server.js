const http = require('http');

const server = http.createServer((req, res) => {
    console.log("WHAT IS HAPPENING?!!??");
    console.log(req.url);
    if (req.url === '/') {
        res.end('<h1>welcome to my home page!!!</h1>')
    } else if (req.url === '/cats') {
        res.end('Welcome to cats! Im alergic to cats')
    } else if (req.url === '/dogs') {
        res.end("I used to have a dog!")
    } else {
        res.end('generic response');
    }
})



// Server starts listening to connections....
server.listen(8080, function() {
    console.log("Server is on!!!");
});
console.log("hello world?");
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/camelcase') {
        res.end("the best way to name your variables in javascript ")
    } else if (req.url === '/inuyasha') {
        res.end("<h1>I want to change the world~</h1>");
    } else if (req.url === '/jedi') {
        res.end("Hello there! General Kanobi!");
    } else {
        res.end("HELLO WORLD!")
    }
})




// lets the server to go online on the specific port
// and listen for REQUESTS
server.listen(8080, () => {
    console.log("server is on!");
})
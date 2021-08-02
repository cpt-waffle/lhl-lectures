const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('THIS IS A HOME PAGE!!!!!');
    } else if(req.url === '/morning') {
        res.end("<ul><li>And Good morning to you as well :)</li></ul>");
    } else {
        res.end('i unno what to do LOL');
    }
})
// HTML

// Server must listen
server.listen(8080, function() {
    console.log("Server is online!")
});
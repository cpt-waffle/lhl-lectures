const http = require('http');

// we have to create the server
// with appropriate handle request logic..
const server = http.createServer((req, res) => {
    console.log("someone is asking us for something...");
    console.log(req.url);
    if (req.url === '/NEVERGONNAGIVEYOUUP' && req.method === 'GET') {
        res.end('NEVER GONNA GIVE YOU DOWN');
    } else if ( req.url === '/apple' && req.method === 'GET') {
        res.end('thats a fruit!!!');
    } else if ( req.url === '/hi' && req.method === 'GET') {
        res.end('HELLO THERE!');
    } else {
        res.end("no route matches!");
    }
})




// we must make the server listen to connections...
server.listen(8080, () => console.log(`Server is listening on port ${8080}`));
### W3D1 - INTRO TO SERVERS

Today we will be talking about 

- Web Servers
- NodeJS Server
- Request <----> Response
- ExpressJS
- EJS
- Sending information from Server to EJS


#### What is A Server?

![req-res-server](https://bytesofgigabytes.com/IMAGES/Networking/HTTPcommuncation/http%20communication.png)

A server is a program, that is able to serve up information to other 
computers/programs. A server `listens` to peoples `requests`, if the 
`request` is valid, then server will respond with information, otherwise
it may throw an error, show a warning to the client, or send the client
somewhere else.

By itself, server can only do one thing: `listen`. Servers listen to 
other communications made by clients(other computers). 

A client always asks a server for a `request`, and a server always has
to give back a `response`. This is how the two comunicate with each other.
A typical request/response senario is:

- __Server is online!__
- __Server is listening__
- __A Wild Client Appears!__
- Client: Hey server im looking for a method: `GET` and route: `http://example.edu/`
- Server: Let me check if i have it...
- Server: Aha found it, `responding` back with info i got on that.
- __Server: Server is listening__

![server2](https://www.quexsolutions.com/wp-content/uploads/2016/07/cloud-servers-1.gif)

A very basic NodeJS server can be code like so:

```js
const PORT = 8080;
let http = require('http');

// server logic goes in here...
let server = http.createServer((request, response) => {
    response.end('Hello World!!');
})

// listening...
server.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
});
```


Now this code can be improved to take different requests and respond back
with different logic like so:

```js
const PORT = 8080;
let http = require('http');

// server logic goes in here...
let server = http.createServer((request, response) => {
        // respond to all requests in this function
        console.log(request.method); // method of request
        console.log(request.url);   // url of request
        if (request.method === 'GET' && request.url === '/') { 
            // based on url and method we will do the following...
            response.end('<h1>hello world</h1>');
        }
});

// listening...
server.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
});
```

Now this is working as intended BUT managing this is going to be harder and 
harder if we want to scale this well. Alot of [features](https://www.geeksforgeeks.org/node-js-vs-express-js/) are missing that we would have to code ourselves. So instead of using this, we will be switching to 
a server framework called `ExpressJS`.

#### What is ExpressJS

![expressJS](https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png)

"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js." - Wikipedia

To start with we will first initialize a folder called `demo-expressJS` and run `npm init` so we can 
keep track of all the node package dependencies.

#### Getting Started

`npm init`
__follow the questionare that gets asked__

Then we will make a file called `server.js`.

Afterwards we will install `expressJS` by running the `npm install` command.

`npm install express`

This will install all the dependencies into our node_modules so we can start using `expressJS`.

Now inside of `server.js` we will start working on getting a basics setup. Following the example
from the [express documentation](https://expressjs.com/en/starter/hello-world.html)

```js
const PORT = 8080;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at ${PORT}`);
})
```

TIP: `Req` and `Res` are requests and responses that will be used ALWAYS in servers!


#### EJS 

Now that we we have a rudimentary server in the works, We need to make a bit more scalable.
We can write `HTML` in the `res.send()` BUT its going to be messy and very hard to maintain...
So we will be using a template engine called `EJS`

- FIRST we have to install `ejs` with `npm install`

`npm install ejs`

- then we will make a folder where our server is located called `views`

`mkdir views`

- inside of views, we will make a file called: `home.ejs` and put the following code in it:

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
    <h1>HELLO WORLD</h1>
</body>
</html>
```


- Finally, we will make modifications to our server.

```js
const PORT = 8080;

const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs'); // <-----

app.get('/', (req, res) => {
  res.render('home') // <-- tell to render the HTML/EJS page we made
})

app.listen(port, () => {
  console.log(`Example app listening at ${PORT}`);
})
```

#### Passing information from Server to View

Sometimes we want to render something that is on the server. We need to remember that 
`res.render()` takes in two arguments: one being the file to send, the second being 
an `object` that can be used in the view file. So for instance:

```js
app.get('/', (req, res) => {
  const object = {fruit: 'banana', vegetable: 'green pepper'}; // <-- OBJECT TO BE USED..
  res.render('home', object) // OBJECT passed in...
```

We can now use thouse `keys` in `home.ejs` as follows:

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
    <h1>HELLO WORLD</h1>
    <%= fruit %>
    <h3><%= vegetable %></h3>
</body>
</html>
```


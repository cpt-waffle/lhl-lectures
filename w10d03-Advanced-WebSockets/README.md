#### Advanced Topic: WebSockets (The Quick Guide to Server/Client Socket Connection)

Hello and welcome to our advanced high level lecture. I know some of you are very interested in a real time connections and were thinking about finals in doing it.

#### Review: APIs

An API server is a server lives with no visualizations ( such as no front-end ). As long as we know the endpoints, we can recieve, and manipulate data using GET or POST methods. A way we communicate with an `api` server is that we send out `requests` ( GET/POST/PUT/PATCH/DELETE) which then the server might do some logic, and then return back a `response`. 

![http](https://www.w3schools.in/wp-content/uploads/2019/08/http-protocol.jpg)


#### Web Sockets

However a web socket connection is quite different. Infact it acts alittle more of `tcp`. Once a connection starts, both server and client, can send messages to each other, however unlike `HTTP` once a response has been made, the connection does not die. Until someone actually disconnects ( closes the app, or presses a disconnect ) than both server and client are connected and are listening to events.

![websockets](https://images.techhive.com/images/article/2016/06/websockets-100668229-primary.idge.jpg)

#### Demo

For our demo we will be going back to `React` and `NodeJS`. We will be using `socket.io`, which is a great implementation of web sockets. Some may say that going baremetal `wss` is a better suggestion, but in my opinion `socket.io` is quite robust and has alot of things "fixed" for you out of the gate.

[Read Here](https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets)


First we start with out server

```js
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = 3001;


const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
```

Now this looks vaguely familiar, with an exception of this package `socket.io`. Right now server is just going online and listening, but nothing really is happening yet.
This is because `socket.io` has its own listeners that we have to configure, and play around with. For the first one we will be looking into `connect`

```js
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = 3001;


const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
```


```js
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = 3001;


const app = express();
const server = http.createServer(app);
const io = socketio(server);
// listeners 
io.on('connection', socket => {
    console.log("Client Connected!");
})

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
```

Now Nothing has happened so far so we will go into our `react app` and install a client to connect to our web socket server.

``` npm i socket.io-client ```

Now we have a way to connect to our server with this package. The problem is where to define our connections. We define our socket outside of the component, however, we track connection with a state, and keep all the listeners inside of the `useEffect`. Note that we will have to clean up every event listener with the `return` from use effect so it does not create multiple event registrations.

```jsx
const socket = io();


function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);


  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    })

    socket.on('disconnect', () => {
      setIsConnected(false);
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
    }
  }, [])

```

The rest, is adding listeners, and sending in data. Refer to the repo link for the code written.
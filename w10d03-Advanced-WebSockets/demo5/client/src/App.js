//  WE HAVE to connect our client to our socket server!
//  we need to do this by downloading another package from scoket io
// that allows us to connect to the server...
// socket.io-client
import './App.css';
import {useEffect, useState} from 'react';
// Step 1: import socket.io-client 
import socketIoClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:8080';
const connection = socketIoClient(ENDPOINT);

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // 
  useEffect(() => {
    connection.on('INITIAL', (data) => {
      setUser(data.name);
      setUsers(data.users);
    })

    connection.on("NEW_USER", data => {
      setUsers(prev => [...prev, data.name]);
    })

    connection.on("DISCONNECT_USER", data => {
      console.log("DISCONNECTED", data);
      setUsers(prev => prev.filter(name => name !== data.name));
    })
    connection.on('MESSAGE', data => {
      console.log("MESSAGE", data);
      setMessages(prev => [...prev, data.message]);

    })
  }, [connection])

  const onSend = evt => {
    evt.preventDefault();
    console.log('message', evt.target.chat.value);
    setMessages(prev => [...prev, evt.target.chat.value]);
    connection.emit("message", {message: evt.target.chat.value})
  }

  return (
    <div className="App">
      {user ? <h1>Logged in as: {user}</h1> : <h1>Loading...</h1>}
      {messages.map((message) => <p>{message}</p>)}
      {users.map((user) => <li>{user}</li>)}

      <form onSubmit={onSend}>
        <input type="text" name="chat"/>
          <button>send</button>
      </form>
    </div>
  );
}

export default App;

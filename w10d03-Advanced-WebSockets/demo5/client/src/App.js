import './App.css';
import {useEffect, useState} from 'react';
// Step 1: install socket.io-client 2.3.0;
// Step 2: import socket.io-client
import socketIoClient from 'socket.io-client';



// Step 3: declrate your backend URL // proxy: 
const ENDPOINT = 'http://localhost:8080'
const connection = socketIoClient(ENDPOINT);
// useEffect <--- runs when side-effects happen

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    connection.on('INITIAL', (data) => {
      console.log('HELLO MESSAGE HAS COME IN!!');
      console.log(data);
      setUser(prev => data.name);
      setUsers(prev => data.users);
    })

    connection.on('NEW_USER_CONNECTION', (data) => {
      setUsers(prev => [...prev, data]);
    })
  
    connection.on("DISCONNECT", (data) => {
      setUsers(prev => prev.filter(name => name !== data));
    })

  }, [connection]); 

  return (
    <div className="App">
      <h1>hello world!</h1>
      <h1>Current User:{user}</h1>
      <h3>User List</h3>
      {users.map(user => <li>{user}</li>)}
      <button onClick={() => connection.emit("CLICKED", 'clicked')}>Click me</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';
import Name from './Name'
// if you do not put the http, CORS issue
const ENDPOINT = 'http://localhost:8080';
const connection = socketIOClient(ENDPOINT);
function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);


  useEffect(() => {
    //connect to our socket backend server
    
    connection.on('INITIAL', data => {
      setUsername(data.name);
      setUsers(data.users);
      console.log(data);
    })

    connection.on('USER_CONNECTED', data => {
      setUsers(data.users);
    })

    connection.on('USER_DISCONNECTED', data => {
      setUsers(data.users);
    })

  }, [])

  return (
    <div className="App">
      {connection.connected && <Name socket={connection }/>}
      <p>Current Username: <span><b>{username}</b></span></p>
      {users.map((user, id) => <li key={id}>{user}</li>)}
    </div>
  );
}

export default App;

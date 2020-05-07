import React, {useState, useEffect } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [connection, setConnection] = useState({});
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    console.log("Load once!!");
    const conn = socketIOClient(ENDPOINT);
    setConnection(conn);
    // connection.on('connect', () => {
    //   console.log("i have connected")
    //   connection.emit('foo', 'bar');
    // })
    conn.on('intial', data => {
      console.log("ON INITIAL");
      console.log(data);
      setUser(data.user);
      setUsers([...data.users]);
    })
    conn.on('users', data => {
      console.log("ON USERS");
      setUsers([...data.users]);
    })
    
    conn.on('message', (data) => {
      setMessages(prev => [...prev, data]);
      console.log(messages);
      console.log("MESSAGE HAS COME");
      console.log(data);
    })

  }, [])


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(connection);
    console.log(evt.target.message.value);
    connection.emit('message', {user, message: evt.target.message.value})
  }



  return (
    <div className="App">
        {users.map(u => <li>{u.username}</li>)}
        {messages.map(msg => <li><b>{msg.user.username}:</b>{msg.message}</li>)}
        <form onSubmit={handleSubmit}>
          <input type='text' name='message'/>
          <button>Submit</button>
        </form>
    </div>
  );
}

export default App;

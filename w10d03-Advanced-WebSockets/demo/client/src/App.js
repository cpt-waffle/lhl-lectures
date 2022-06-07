import './App.css';
import { useEffect, useRef, useState } from 'react';
// all we need to do is CONNECT to the backend socket server!
// Step 0: Install socket.io-client <-- THE VER OF SERVER SOCKET.IO MUST MATCH 
// Step 1: import socket.io-client
import socketIoClient from 'socket.io-client';
// Step 2: make the connection


// all listeners of socketIO we build, will be 
// inside of the useEffect 
// useEffect() => [], [val], 
// React 18 has a bug! useEffect runs twice at start because of strict mode!!
// either 
// -- remove strict mode (no more errors tho)
// -- use the hook example from this blog post --> https://blog.ag-grid.com/avoiding-react-18-double-mount/
// -- use older ver of react
function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [conn, setConn] = useState(null);

  const usersRef = useRef(users);
  const userRef = useRef(user);


  useEffect(() => {
    console.log('USE EFFECT!');
  },[])

  useEffect(() => {
    const connection = socketIoClient('http://localhost:8080');
    setConn(connection);
  },[])

  useEffect(() => {
    if (conn) {
      conn.on('INITIAL_CONNECTION', data => {
        console.log("DATA HAS COME IN FROM THE SERVER!");
        console.log(data);
        setUser(prev => data.name);
        setUsers(prev => data.usersList);
      })

      conn.on('NEW_USER', data => {
        console.log("NEW USER MESSAGE!");
        console.log('user --> ', user);
        console.log('users --> ', users);
        console.log("-----------------");
        setUsers(prev =>  {
          return [...prev, data.name]
        });
      })

      conn.on('DISCONNECTED_USER', data => {
        console.log("DISCONNECTED!", data);
        console.log('user --> ', user)
        console.log('users --> ', JSON.stringify(users));
        console.log('users.length --> ', users.length);

        console.log("-----------------");
        
        setUsers(prev => {
          console.log("PREV", prev);
          return prev.filter(user => user !== data.name)
        });
      })
    }
  }, [conn])

  return (
    <div className="App">
      <h2>Chat App!</h2>
      {user ? <h2>User: {user}</h2> : <h3>Loading....</h3>}
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>
    </div>
  );
}

export default App;

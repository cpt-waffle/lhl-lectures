import './App.css';
import { useEffect, useState } from 'react';
// all we need to do is CONNECT to the backend socket server!
// Step 0: Install socket.io-client <-- THE VER OF SERVER SOCKET.IO MUST MATCH 
// Step 1: import socket.io-client
import socketIoClient from 'socket.io-client';
// Step 2: make the connection
const connection = socketIoClient('http://localhost:8080');

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

  useEffect(() => {
    connection.on('INITIAL_CONNECTION', data => {
      console.log("DATA HAS COME IN FROM THE SERVER!");
      console.log(data);
      setUser(prev => data.name);
      setUsers(prev => data.usersList);
    })

    connection.on('NEW_USER', data => {
      console.log("NEW USER MESSAGE!");
      console.log('users --> ', users)
      setUsers(prev =>  {
        return [...prev, data.name]
      });
    })

    connection.on('DISCONNECTED_USER', data => {
      console.log("DISCONNECTED!", data);
      console.log(users);
      console.log("-----------------");
      setUsers(prev => prev.filter(user => user !== data.name));
    })
  }, [connection])

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

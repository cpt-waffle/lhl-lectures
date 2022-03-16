import './App.css';
import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const END_POINT = 'http://localhost:8080';
const connection = socketIOClient(END_POINT);
// My backend URL
function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // make a connection (SOCKET) with my backend.
    connection.on('initial', msg => {
      console.log("something came back!");
      console.log(msg);
    })

    connection.on('NEW_USER', msg => {
      console.log("list of all the users");
      console.log(msg);
      setUsers(msg.users);
    })


    connection.on('DISCONNECTED_USER', msg => {
      console.log("DISCONNECTED!!");
      setUsers(prev => prev.filter(user => user !== msg.user))
      console.log(msg);
    })
  }, [connection])

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      {users.map(user => {
        return <h3 key={user}>{user}</h3>
      })}
    </div>
  );
}

export default App;

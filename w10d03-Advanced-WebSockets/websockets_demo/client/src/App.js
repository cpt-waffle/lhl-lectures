import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// double check that socket.io-client ver
// and socket.io (server) ver match (ie: 4.5.4)

// connecting...
const socket = io();

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected! :)');
    })

    socket.on("INITIAL_CONN", (data) => {
      console.log(data);
      setUser(data.name);
      setUsers(data.users);
    })

    socket.on('SEND_MSG', (data) => {
      console.log("new message has come!");
      console.log(data);
      setMessages(prev => [...prev, data]);
    })

    socket.on("NEW_USER", data => {
      console.log(data);
      toast(`New user: ${data.name} has connected!`,  {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setUsers(prev => [...prev, data.name]);
    })

    return () => {
      console.log("unmounting...");
      socket.off('connect');
      socket.off('INITIAL_CONN');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
    }

  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    const msg = evt.target.message.value;
    console.log(msg);
    socket.emit("SEND_MSG", {user, msg});
  }

  return (
    <div className="App">
      <h1>Chat App</h1>
      <h3>current user: {user}</h3>
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>

      <h2>Messages</h2>
      <ul>
        {messages.map(msg => <li><b>{msg.user}:</b>{msg.msg}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" name="message"/>
        <button>Send</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;

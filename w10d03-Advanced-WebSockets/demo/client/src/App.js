import './App.css';
import { io } from 'socket.io-client';
import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  // strict mode --> mounts --> unmounts --> mounts 
  useEffect(() => {
    socket.on('INITIAL_CON', (payload) => {
      console.log(payload);
      setName(payload.username);
      setUsers(payload.users);
    })

    socket.on('NEW_USER', (payload) => {
      console.log("NEW_USER");
      console.log(payload);
      toast.info(`New User connected: ${payload.newUser}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => [...prev, payload.newUser]);
    })

    socket.on('SEND_MSG', payload => {
      console.log(payload);
      setMessages(prev => [...prev, payload])
    })


    return () => {
      console.log("UNMOUNTING....");
      socket.off('INITIAL_CON');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');

    }
  }, [])

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.msg.value);
    socket.emit('SEND_MSG', {message: evt.target.msg.value});
  }


  return (
    <div className="App">
      <h1>Chat App!</h1>
      {name ? <h2>Logged in as: {name}</h2> : <h2>Loading...</h2>}
      <h3>Online Users</h3>
      <ul>
        {users.map(u => <li>{u}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" name="msg"/><button>Send!</button>
      </form>
      <ul>
        {messages.map(msg => <li>{msg.message}</li>)}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App;

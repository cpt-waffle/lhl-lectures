import './App.css';
// to connect to the backend server
import {io} from 'socket.io-client';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();

function App() {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('INITIAL_CONNECTION', (payload) => {
      console.log("Data has come in!!");
      console.log(payload);
      setUser(payload.name);
      setUsers([...payload.users]);
    })

    socket.on('NEW_USER', payload => {
      console.log("NEW USER!!");
      console.log(payload);
      toast.info(`New User has connected ${payload.name}`, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => [...prev, payload.name]);
    })

    socket.on('SEND_MSG', payload => {
      console.log("message has come in!");
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    })

    return () => {
      socket.off('INITIAL_CONNECTION');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
    }
  }, []);

  const onMessageSubmit = (evt) => {
    evt.preventDefault();
    socket.emit('SEND_MSG', {msg: evt.target.message.value})
  }

  return (
    <div className="App">
      <h1>Chat App!</h1>
      <h3>You are:  {user ? user : <span>Loading...</span>}</h3>
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>
      <ul>
        {messages.map(message => <li>{message.msg}</li>)}
      </ul>
      <form onSubmit={onMessageSubmit}>
        <input type="text" name="message"/>
        <button>Send!</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default App;

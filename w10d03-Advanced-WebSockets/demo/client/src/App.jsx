import { useState, useEffect } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {io} from 'socket.io-client';

const URL = 'http://localhost:8080';

const socket = io(URL);

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  // mount --> unmount --> mount 
  useEffect(() => {
    const newConnection = payload => {
      console.log("NEW_CONNECTION");
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    }

    const newUser = payload => {
      console.log("NEW USER has connected!!");
      console.log(payload);
      toast.info(`New User has connected: ${payload.name}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => [...prev, payload.name]);
    }

    const sendMsg = payload => {
      console.log("message is back!");
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    }

    socket.on('NEW_CONNECTION', newConnection);
    socket.on('NEW_USER', newUser);
    socket.on('SEND_MSG', sendMsg);
    console.log('MOUNT');



    return () => {
      console.log('UNMOUNT!');
      socket.off('NEW_CONNECTION', newConnection);
      socket.off('NEW_USER', newUser);
      socket.off('SEND_MSG', sendMsg);
    }

  }, [])

  const onSendMsg = evt => {
    evt.preventDefault();
    const msg = evt.target.msg.value;
    console.log(msg);
    socket.emit('SEND_MSG', {name, msg});
  }


  return (
    <>
      <h1>Chat App!</h1>
      <h2>You are: {name}</h2>
      <h3> Users Online:</h3>
      <ul>
      {users.map(user => <li key={user}>{user}</li>)}
      </ul>


      <ul class="messages">
        {messages.map(message => 
          <li key={message.id}><b>{message.name}:</b>{message.msg}</li>
        )}
      </ul>

      <form onSubmit={onSendMsg}>
        <input type="text" name="msg"/>
        <button>SEND!</button>
      </form>

      <ToastContainer />
    </>
  )
}

export default App

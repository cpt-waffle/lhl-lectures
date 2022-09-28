import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// you will need to isntall the client side of socket.io onto react app 
import { io } from 'socket.io-client';
const socket = io();

function App() {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("MOUNTING...");
    socket.on('connect', () => {
      console.log("we have connected");
    })

    socket.on('disconnect', () => {
      console.log("disconnected");
    })

    socket.on('INITIAL_CONN', data => {
      console.log("Initial connection event!!!");
      console.log(data);
      setUser(data.name);
      setUsers(data.users);
    })

    socket.on('SEND_MSG', data => {
      console.log("Message has come back!");
      console.log(data);
      setMessages(prev => [...prev, data]);
    })

    socket.on('NEW_USER', data => {
      toast.info(`${data.name} has CONNECTED!!!! 🦄`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setUsers(prev => [...prev, data.name]);
    })

    return () => {
      console.log("UNMONTING.....");
      socket.off('connect');
      socket.off('disconnect');
      socket.off('INITIAL_CONN');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
    }
  }, []);
  console.log('tet');

  const onMessageSent = evt => {
    evt.preventDefault();
    const message = evt.target.text.value;
    console.log("message", message);
    socket.emit('SEND_MSG', {user, message});
  }

  return (
    <div className="App">
      <h1>Connected: {user}</h1>
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>

      <form onSubmit={onMessageSent}>
        <input type='text' name="text"/>
        <button>send!</button>
      </form>

      <ul>
        {messages.map(message => <li><b>{message.user}</b>: {message.message}</li>)}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App;

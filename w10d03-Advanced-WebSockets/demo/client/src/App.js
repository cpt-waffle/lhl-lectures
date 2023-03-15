import {io} from 'socket.io-client';
import './App.css';
import {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const socket = io();


function App() {

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected!");
    })

    socket.on('INITIAL_CONNECTION', payload => {
      console.log('initial connection!');
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    })

    socket.on('NEW_USER', payload => {
      console.log("new user!");
      console.log(payload);
      toast.success(`User ${payload.name} has connected!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => [...prev, payload.name])
    })

    socket.on("SEND_MSG", payload => {
      console.log(payload);
      setMessages(prev => [...prev, payload])
    })

    
    socket.on('DISCONNECT', payload => {
      console.log('disconnected!');
      console.log(payload);
      toast.error(`User ${payload.name} has disconnected!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => prev.filter(name => name !== payload.name));
    })

    return () => {
      //
      console.log("unmounting.....");
      socket.off('connect');
      socket.off('INITIAL_CONNECTION');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
      socket.off('DISCONNECT');
    }    
  }, []);

  const sendMessage = evt => {
    evt.preventDefault();
    console.log(evt.target.msg.value);
    socket.emit('SEND_MSG', {name, msg: evt.target.msg.value});
  }


  return (
    <div className="App">
      <h1>Chat App :)</h1>
      {name ? <h2>Current User: {name}</h2> : <h2>Getting Name...</h2>}
      {users.map(user => <li>{user}</li>)}


      <ul>
        {messages.map(msg => <li>{msg.name}: {msg.msg}</li>)}
      </ul>
      <form onSubmit={sendMessage}>
        <input type="text" name="msg"/>
        <button>Send Message!</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default App;

import './App.css';
import {io} from 'socket.io-client';
import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// implentation of socket.io client
// 1) npm i socket.io-client
// 2) VERIFY THE VERSION of backend/frontend socket.io THEY MUST MATCH!!!!

//// to connect to your backend....
//  1) import socket.io-client
const socket = io();

function App() {

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected :)')
    })

    socket.on('INITIAL_CONNECTION', (data) => {
      console.log("Initial Connection!!!");
      console.log(data);
      setName(data.name);
      setUsers(data.users);
    })

    socket.on('SEND_MSG', data => {
      console.log("message has come in from server!");
      console.log("message :", data);
      setMessages(prev => [...prev, data]);
    })

    socket.on('NEW_USER', data => {
      setUsers(prev => [...prev, data.name]);
      toast.info(`New User connected: ${data.name}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })

    return () => {
      console.log("unmonting....");
      socket.off('connect');
      socket.off('INITIAL_CONNECTION');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
    }

  }, []);

  const onSubmit = evt => {

    evt.preventDefault();
    const msg = evt.target.msg.value;
    console.log("message: ", msg);
    socket.emit('SEND_MSG', {msg});
  }


  return (
    <div className="App">
      {name ?<>
        <h1>Connected as: {name}</h1>
        <ul>
          {users.map(user => <li>{user}</li>)}
        </ul>

        <h2>Messages</h2>
        <ul>
          {messages.map(m => (<li>{m.msg}</li>))}
        </ul>
        <form onSubmit={onSubmit}>
          <input type="text" name="msg"/>
          <button>Send Msg!</button>
        </form>
      </>
      : <h1>Connecting....</h1>}

    <ToastContainer />
    </div>
  );
}

export default App;

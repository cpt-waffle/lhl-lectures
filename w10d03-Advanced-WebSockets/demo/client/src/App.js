import './App.css';
// socket.io-client
import {io} from 'socket.io-client';
import {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();


function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('INITIAL_CONNECTION', payload => {
      console.log("payload has come in!", payload);
      setName(payload.name);
      setUsers(payload.users);
    })

    socket.on('NEW_USER', payload => {
      console.log("new user has connected!");
      console.log(payload);
      toast.success(`New User! ${payload.name} has connected :)  !!!`, {
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
    })

    socket.on('SEND_MSG', payload => {
      console.log("payload", payload);
      setMessages(prev => [...prev, payload.msg]);
    })


    return () => {
      socket.off('INITIAL_CONNECTION');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');
    }

  }, [])

  const onMessageSubmit = (evt) => {
    evt.preventDefault();
    const msg = evt.target.message.value;
    console.log("msg", msg);
    socket.emit('SEND_MSG', { msg: `${name}: ${msg}` });
  }

  return (
    <div className="App">
      <h1>Chat App!</h1>
      <h3> You are : {name} </h3>
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>

      <ul>
        {messages.map(msg => <li>{msg}</li>)}
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

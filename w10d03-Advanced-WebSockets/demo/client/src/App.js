import './App.css';
import {io} from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react';

const socket = io();

function App() {
  const [name,setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("use-effect!");
    socket.on('INITIAL_CONN', (payload) => {
      console.log("intial_conn");
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    })

    socket.on("NEW_USER", (payload) => {
      console.log("new_user");
      console.log(payload);
      toast.info(`🦄New User has connected:  ${payload.name}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setUsers(prev => [...prev, payload.name]);
    })

    socket.on('SEND_MSG', payload => {
      console.log('send_msg');
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    })

    return () => {
      console.log("unmount!");
      socket.off('INITIAL_CONN');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');

    }

  }, []); // <-- dependancy array

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.msg.value);
    const msg = evt.target.msg.value;
    evt.target.msg.value = '';
    socket.emit('SEND_MSG', {name, msg});
  }


  return (
    <div className="App">
      <h1>Chat App!</h1>
      {name ? <h4>Connected as {name}</h4> : <h4>connecting...</h4>}
      <div className='chat'>
        <ul>
          {users.map(user => <li>{user}</li>)}
        </ul>
        <form onSubmit={onSubmit}>
          <ul>
            {messages.map(message => <li><b>{message.name}:</b> {message.msg}</li>)}
          </ul>
          <input type="text" name="msg"/>
          <button>Send!</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

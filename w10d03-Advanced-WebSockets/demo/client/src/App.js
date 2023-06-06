import './App.css';
import {io} from 'socket.io-client';
import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {           // from server { user }
    socket.on("INITIAL_CONN", payload => {
      console.log("payload");
      console.log(payload);
      setUser(payload.user);
      setUsers(payload.users);
    })
    
    socket.on('NEW_USER', payload => {
      console.log("new user--------");
      console.log(payload);
      // prev =>
      console.log('user', user); // user = ''
      console.log('users', users); // users = []
      toast.info(`New User: ${payload.user}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setUsers(prev => {
        console.log("PREVIOUS STATE WAS...", prev);
        return [...prev, payload.user];
      })

    })

    socket.on('SEND_MSG', payload => {
      console.log("message came back");
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    })

    return () => {
      socket.off('INITIAL_CONN');
      socket.off('NEW_USER');
      socket.off('SEND_MSG');

    }

  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target.message.value);
    const payload = {message: evt.target.message.value, user };
    socket.emit('SEND_MSG', payload);
  }


  return (
    <div className="App">
      <h1>Chat App!</h1>
      {user ? <h2>{user}</h2> : <h2>Loading...</h2>}
      <h1>Current online users</h1>
      <ul>
        {users.map( user => <li key={user}>{user}</li>)}
      </ul>

      <ul>
        {messages.map( message => <li>{message.user}: {message.message}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" name="message"/>
        <button>Send!</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default App;

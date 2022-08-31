import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// step 1 adding socket.io
// when installing socket.io-client MAKE SURE
// the ver of socket.io on server side, match!!!
// npm install socket.io-client
import io from 'socket.io-client';

const socket = io();

function App() {
  // useRef
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);



  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    })

    socket.on('disconnect', () => {
      setIsConnected(false);
    })

    socket.on('INITIAL_CONNECTION', data => {
      console.log("message has come in!");
      console.log(data)
      setUser(data.name);
      console.log(data.users);
      setUsers(data.users);
    })

    socket.on('NEW_USER', data => {
      console.log("new user has connected!");
      console.log(data);
      toast.success(`🦄 New User has Connected! ${data.name}`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setUsers(prev => [...prev, data]);
    })

    socket.on('SEND_MESSAGE', (msg) => {
      toast.info('Message has come in!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        });
      setMessages(prev => [...prev, msg]);
    })

    return () => {
      // remove event listeners from socket.io
      socket.off('connect');
      socket.off('disconnect');
      socket.off('INITIAL_CONNECTION');
      socket.off('SEND_MESSAGE');
      socket.off('NEW_USER');
    }
  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    const message = evt.target.msg.value;
    console.log('message:', message);
    socket.emit('SEND_MESSAGE', {message, user});
  }

  if (isConnected) {
    return (
      <div className="App">
        <ToastContainer />
        <h1>Hello world :)</h1>
        <h3>Current User: {user ? user : 'getting name...'}</h3>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>

        <ul>
          {messages.map(msg => <li><b>{msg.user}:</b>{msg.message}</li>)}
        </ul>

        <form onSubmit={onSubmit}>
          <input type='text' name='msg'/>
          <button>send!</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        Not Connected!
      </div>
    )
  }


}

export default App;

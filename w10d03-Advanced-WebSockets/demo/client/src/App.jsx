import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = 'http://localhost:8080';

const socket = io(URL);

function App() {

  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // mounts ---> unmounts ---> mounts 
  useEffect(() => {
    const newConnection = payload => {
      console.log("data has come in", payload)
      setUser(payload.name);
      setUsers([...payload.users]);
    }

    const newUser = payload => {
      console.log('new user has connected!', payload);
      setUsers(prev => [...prev, payload.name]);
      toast.info(`New User has Connected: ${payload.name}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    const sendMsg = payload => {
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    }

    socket.on('SEND_MSG', sendMsg)

    socket.on('NEW_CONNECTION', newConnection)

    socket.on('NEW_USER', newUser);

    return () => {
      socket.off('NEW_CONNECTION', newConnection);
      socket.off('NEW_USER', newUser);
      socket.off('SEND_MSG', sendMsg);
    }

  }, [])

  const onMessageSend = (evt) => {
    evt.preventDefault();
    console.log(evt.target.msg.value);
    socket.emit('SEND_MSG', {user, msg: evt.target.msg.value});
  }


  return (
    <>
      <div class="flex">
        <div>
        <h1>Chat Server Web Sockets!</h1>
        {user ? <h3>You are connected:  {user}</h3> : <h3>Loading...</h3>}
        {users.length && 
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}
        </ul>
        }
        </div>
        <form onSubmit={onMessageSend}>
          <div class="messages">
            {messages.map(msg => <div><b>{msg.user}</b>: {msg.msg}</div>)}
          </div>
          <input type="text" name="msg"/>
          <button>send</button>
        </form>
      
        <ToastContainer/>
      </div>
    </>
  )
}

export default App

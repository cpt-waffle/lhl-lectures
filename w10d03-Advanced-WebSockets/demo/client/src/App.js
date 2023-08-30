import './App.css';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io();

function App() {
  const [name,setName] = useState('');
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  // mounts --> unmounts --> mounts
  useEffect(() => {
    console.log("MOUNTING---!!");

    const intialConn = payload => {
      console.log("initial_conn");
      console.log(payload);
      setName(payload.name);
      setUsers(payload.users);
    }

    const newUser = payload => {
      console.log("NEW_USER", payload);
      setUsers(prev => [...prev, payload.name]);
      toast.info(`New User Connected, ${payload.name}`, {
        position: "top-left",
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
      console.log("SEND_MSG");
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    }

    socket.on('INITIAL_CONN', intialConn)
    socket.on("NEW_USER", newUser);
    socket.on('SEND_MSG', sendMsg);

    return () => {
      console.log("UNMOUNTING....!!");
      socket.off('INITIAL_CONN', intialConn);
      socket.off('NEW_USER', newUser);
      socket.off('SEND_MSG', sendMsg);
    }



  }, []);

  const onSubmit = evt => {
    evt.preventDefault();
    const msg = evt.target.msg.value;
    evt.target.msg.value = '';
    console.log(msg);

    socket.emit("SEND_MSG", {name, msg});


  }

  return (
    <div className="App">
      <h1>Chat App!</h1>
      {name ?<h1>{name}</h1> : <h1>Connecting...</h1>}
      <ul>
        {users.map(user => 
          <li key={user}>{user}</li>
        )}
      </ul>

      <ul>
      {messages.map(message => <li><b>{message.name}: </b> {message.msg}</li>)}
      </ul>

      <form onSubmit={onSubmit}>
        <input type="text" name="msg"/>
        <button>Send!</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;

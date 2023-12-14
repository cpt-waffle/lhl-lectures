import { useState, useEffect } from 'react';
import {io} from 'socket.io-client';

const URL = 'http://localhost:8080';

const socket = io(URL);

function App() {
  const [name, setName] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('MOUNTS <-----');
    const newConnection = payload => {
      console.log('you have connected');
      setName(payload.name);
      setUsers(payload.users);
    }

    const newUser = payload => {
      console.log("someone new has joined the chat");
      console.log(payload);
      setUsers(prev => [...prev, payload.name]);
    }

    const newMessage = payload => {
      console.log("message is here!");
      console.log(payload);
      setMessages(prev => [...prev, payload]);
    }

    socket.on('NEW_CONNECTION', newConnection);
    socket.on('NEW_USER', newUser);
    socket.on('NEW_MESSAGE', newMessage);

    return () => {
      console.log('COMPONENT UNMOUNTS ----');
      socket.off('NEW_CONNECTION', newConnection);
      socket.off('NEW_USER', newUser);
      socket.off('NEW_MESSAGE', newMessage);

    }

  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    console.log('your message you written:');
    console.log(evt.target.msg.value);
    socket.emit('SEND_MESSAGE', {name, msg: evt.target.msg.value});
  }

  return (
    <>
      { name ? <h2>You are connected as: {name}</h2> : <h1>Connecting...</h1>}
      <div>
        <div className="users">
          <h3>Connected users</h3>
          <ol>
            {users.map(user => <li key={user}>{user}</li>)}
          </ol>
        </div>
        <div className="messages">
        <ol>
          {messages.map(message => <li key={message.id}>
            <strong>{message.name}</strong>: {message.msg}
          </li>)}
        </ol>
        </div>
      </div>
        <form onSubmit={onSubmit}>
          <input type="text" name="msg"/>
          <button>send</button>
        </form>
    </>
  )
}

export default App

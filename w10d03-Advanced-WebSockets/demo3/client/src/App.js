import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const END_POINT = 'http://localhost:8080';
function App() {
  const [user, setUser] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [connection, setConnection] = useState(undefined);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("useEffect!")
    const conn = socketIOClient(END_POINT)
    conn.on('initial', message => {
      console.log(message);
      setUser(message.user)
    })


    conn.on('user_connected', message => {
      console.log("a new user has connected!");
      console.log(message);
      setUsers(prev => [...prev, message.newUser]);
      toast.success(`A user Connected: ${message.newUser}`);
    })

    conn.on('chat_message', msg => {
      setMessages(prev => [...prev, msg])
    })

    conn.on('disconnected_user', msg => {
      toast.error(`A user disconnected: ${msg.user}`);
    })

    setConnection(conn);
  }, [])

    const onSubmit = evt => {
      evt.preventDefault();
      console.log(evt.target.msg.value);
      connection.emit('chat_message', {msg: evt.target.msg.value, user});
    }

  return (
    <div className="App">
      <h1>{user}</h1>

      <div>
        <ul>
          {messages.map(msg => <li><h2>{msg.user}</h2>: {msg.msg}</li>)}
        </ul>
        <form onSubmit={onSubmit}>
        <input type="text" name="msg"/>
        <button>submit message</button>
        </form>
      </div>



      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

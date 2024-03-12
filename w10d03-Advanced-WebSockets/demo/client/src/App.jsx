import './App.css'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:8080';

const socket = io(URL);

// why do we need a useReducer vs useState ?

// useState > useReducer
// try to seperate your state as much as you possibly
// can 

// /weeks  --- seperated states
// /appointments  --- seperated states
// /users  --- seperated states

// useEffect, useState,
// (look into useMemo, useCallback and useREducer)


// /day    -- take all these states and put em into 1
// /weeks
// appoints -- 
// reducer gives actions, and based on that action
// a specific part of your object state changes

// useContext <--- put something in here that doesnt change often at all
//      put something thats basically read-only


// mount the app
// unmount the app
// mount the app



function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // declare all event listners

    const userConnected = payload => {
      console.log(payload);
      setUser(payload.user);
      setUsers(payload.users);
    }

    const newUser = payload => {
      setUsers(prev => [...prev, payload.user])
    }

    const newMessage = payload => {
      setMessages(prev => [...prev, payload]);
    }

    console.log("mounting....");
    socket.on('USER_CONNECTED', userConnected);
    socket.on('NEW_USER_CONNECTED', newUser);
    socket.on('NEW_MSG', newMessage);


    return () => {
      // undeclare all event listeners
      console.log("unmount....");
      socket.off('USER_CONNECTED', userConnected);
      socket.off('NEW_USER_CONNECTED', newUser);
      socket.off('NEW_MSG', newMessage);


    }

  }, []);

  const onSubmit = evt => {
    evt.preventDefault();
    console.log("test");
    console.log(evt.target.msg.value);
    const payload = {user, message: evt.target.msg.value};
    console.log(payload);
    socket.emit('SEND_MSG', payload);
  }

  return (
    <main>
      <h1>Chat App</h1>
      <h2>Current User: {user ? user : "loading..."}</h2>
      <div>
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}
        </ul>
      </div>
      <div>
        <ol>
          {messages.map(message => 
          <li key={message.id}>
            <h5>{message.user}</h5>: {message.message}
          </li>)}
        </ol>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" name="msg"/>
        <button>Send Message!</button>
      </form>
    </main>
  )
}

export default App

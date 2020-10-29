import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm'
import LoginForm from './LoginForm'
import axios from 'axios';


function App() {



  return (
    <div className="App">
      <UserForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
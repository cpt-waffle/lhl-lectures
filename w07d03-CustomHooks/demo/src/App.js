import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Color from './components/Color';

// Custom hook is basically a way to refactor/test your states
// it also makes state re-usable...


function App() {



  return (
    <div className="App">
      <LoginForm/>
      <RegisterForm/>
      <Color/>
    </div>
  );
}

export default App;
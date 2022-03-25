import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Color from './components/Color';

function App() {

// We need make a component called "Color"
// The color component will have a div 
// and 2 buttons within this div
// The color Component will take in as props an array of colors
// you should be able to switch between the colors by using the two buttons (next and previous color)

  return (
    <div className="App">
      <Color/>
    </div>
  );
}

export default App;
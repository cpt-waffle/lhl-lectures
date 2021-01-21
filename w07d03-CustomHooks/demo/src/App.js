import React, { useState } from 'react';
import './App.css'; //css
// import axios from 'axios';
import ColorChanger from './components/ColorChanger' // components


function App() {

  // const [day, setDay] = useState([]);
  // const [appointments, setAppointments] = useState({});









  return (
    <div className="App">
      <ColorChanger currentColor="blue" colorArr={['green', 'yellow', 'black', 'firebrick', 'skyblue']}/>
    </div>
  );
}

export default App;
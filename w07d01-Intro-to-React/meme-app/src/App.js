import React from 'react';
import logo from './logo.svg';
import MemeItem from './Components/MemeItem'
import './App.css';

function App() {
  return (
    <div className="App">
      <MemeItem title="Test1"/>
      <MemeItem title="another meme"/>
      <MemeItem title="third meme"/>
    </div>
  );
}

export default App;

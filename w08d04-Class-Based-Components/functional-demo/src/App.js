import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  // Card(a,b,c)
  return (
    <div className="App">
      <h1>Functional Demo</h1>
      <Card name="Vas"/>
    </div>
  );
}

export default App;

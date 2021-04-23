import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Functional Demo</h1>
      <Card name={'Wyat Bearington'} title={'Dynamic Team Representative'}/>
    </div>
  );
}

export default App;

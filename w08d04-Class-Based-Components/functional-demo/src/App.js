import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const img = 'https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg'
  return (
    <div className="App">
      <h1>Functional Demo</h1>
      {/* Card(....) */}
      <Card image={img} name="Mr Buttons"/>
    </div>
  );
}

export default App;

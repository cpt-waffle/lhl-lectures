import React from 'react';
import './App.css';
import Card from './components/Card';

const img = 'https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg';


function App() {
  return (
    <div className="App">
      <h1>Class Demo</h1>
      <Card
        name="Mr Snowball" 
        img={img}
      />
    </div>
  );
}

export default App;

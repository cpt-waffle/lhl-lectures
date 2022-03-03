import React from 'react';
import './App.css';
import Card from './components/Card'

const img = 'https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg';


function App() {

  const foo = () => {
    alert("FUNCTION!!!");
  }

  return (
    <div className="App">
      <h1>Functional Demo</h1>
      <Card 
        img={img}
        title={'Senior Factors Technician'}
        foo={foo}
      />
    </div>
  );
}

export default App;

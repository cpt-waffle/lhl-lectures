import React from 'react';
import './App.css';
import Card from './components/Card';


const img = 'https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg';










function App() {

  return (
    <div className="App">
      <h1>Class Demo</h1>
      <Card
        img={img}
        name={'Mr Meows'}
        title={'Senior Nap Engineer'}
      />
    </div>
  );
}

export default App;

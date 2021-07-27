import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/cats').then(res => {
      console.log(res);
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <h1>Cats</h1>
    </div>
  );
}

export default App;

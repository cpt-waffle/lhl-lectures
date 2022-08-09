import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
// const Navbar = require('./Components/Navbar').default;

// const express = require('express');
const catPic = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700"

function App() {
  const [numOfCards, setNumOfCards] = useState(['Mr Meows', 'Mr Woofs', 'Mr. Meowghi ']);

  const addName = (name) => {
    setNumOfCards([...numOfCards, name])
  }

  const cardsList = numOfCards.map(name => <Card name={name}/>)
  return (
    <div>
      <Navbar/>
      <button onClick={() => addName('Mr Waffle')}>Add Mr Waffle</button>
    <div className='layout'>
      {cardsList}
    </div>

    </div>
  );
}

export default App;

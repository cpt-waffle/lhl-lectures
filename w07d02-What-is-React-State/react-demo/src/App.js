import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import TweetCounter from './Components/TweetCounter';

function App() {
  const [number, setNumber] = useState(0);

  // Navbar(number)
  // Navbar = (banana) => 
  const incrementByOne = () => {
    setNumber(number + 1);
  }


  return (
    <div>
      <Navbar banana={number}/>
      <Card eventForEverything={incrementByOne}/>
      <Card eventForEverything={incrementByOne}/>
      <Card eventForEverything={incrementByOne}/>
      <Card eventForEverything={incrementByOne}/>
      <Card eventForEverything={incrementByOne}/>
      <TweetCounter/>
    </div>
  );
}

export default App;

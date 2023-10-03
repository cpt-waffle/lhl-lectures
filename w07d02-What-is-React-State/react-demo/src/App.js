import './App.css';

import { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import CharacterCounter from './Components/CharacterCounter';


function App() {

  const [num, setNum] = useState(0);

  return (
    <div>
      <Navbar num={num}/>
      <div className='flex'>
        <Card setNum={setNum} num={num}/>
        <Card setNum={setNum} num={num}/>
        <Card setNum={setNum} num={num}/>
        <Card setNum={setNum} num={num}/>
      </div>
      <CharacterCounter/>
    </div>
  );
}

export default App;

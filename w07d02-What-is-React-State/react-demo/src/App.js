import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import CharacterCounter from './Components/CharacterCounter';
import { useState } from 'react';

// Building Components
// passing props
// using State
// useEffect for side-effects like getting data from a server


function App() {
  
  const [num, setNum] = useState(9);

  const addOne = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <Navbar num={num} a={1}/>
      <div className='flex'>
        <Card num={num} addOne={addOne}/>
        <Card num={num} addOne={addOne}/>
        <Card num={num} addOne={addOne}/>
      </div>
      <CharacterCounter/>
    </div>
  );
}

export default App;

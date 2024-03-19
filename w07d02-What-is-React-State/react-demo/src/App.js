import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import AddWord from './components/AddWord';
import { useState } from 'react';
import ReducerComponent from './components/ReducerComponent';


function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Navbar banana={counter}/>
      <div class="cards">
        <Card addOne={addOne} counter={counter}/>
        <AddWord/>
      </div>

      <ReducerComponent/>
    </div>
  );
}

export default App;

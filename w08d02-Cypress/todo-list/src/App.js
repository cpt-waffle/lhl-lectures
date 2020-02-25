import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';

// Some simulation
const API = [
  {item: 'Buy Milk',          done: false},
  {item: 'Do Testing',        done: false},
  {item: 'Buy A Boat',        done: false},
  {item: 'Write some Memes',  done: false},
]


const App = () => {

  const [list, setList] = useState([]);

  useEffect( () => {
    setTimeout(() => {
      setList( prev => [...prev, ...API]);
    }, 1000)
  }, []);

  const handleAdd = name => {
    const item = {item: name, done: false};
    setList( prev => [...prev, item]);
  }

  const handleComplete = i => {
    setList(prev => {
      const modifled = [...prev];
      modifled[i].done = !modifled[i].done ;
      return modifled;
    })
  }

  return (
    <div className="App">
      <h1>Get Things Done!</h1>
      <div className='center'>
        <List list={list} handleComplete={handleComplete}/>
      </div>
      <Form handleAdd={handleAdd}/>
    </div>
  );
}

export default App;

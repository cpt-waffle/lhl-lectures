import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List';
import Form from './components/Form';

const App = () => {

  const [list, setList] = useState([]);
  const [error, toggleError] = useState(false);

  useEffect( () => {
    axios.get('http://localhost:8080/')
    .then(res => setList(prev => [...res.data, ...prev]))
    .catch(e => toggleError(true))
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
      {error && <h3>Error Occured, server Offline</h3>}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/';

function App() {
  //STATES
  const [items, setItems] = useState([]);
  const addItem = () => {
    const copy = [...items];
    copy.push('buy bitcoin');
    setItems(copy);
    // items = copy
    // Tell react to re-render, because state has changed!
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <List items={items}/>
      <button onClick={() => addItem()}>CLICK ME</button>
    </div>
  );
}

export default App;

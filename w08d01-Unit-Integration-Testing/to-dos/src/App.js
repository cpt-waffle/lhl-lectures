import React, { useState } from 'react';
import List from './Components/List';

import './App.css';

const list = [
  {item: 'learn react', done: false},
  {item: 'do some testing', done: true},
  {item: 'get food', done: false},
  {item: 'sleep 12 hours', done: false},
  {item: 'Finish watching HMYM', done: false},
]

export default () => {

  const [todoList, modifyList] = useState(list);

  const toggleDone = i => {
    modifyList( prev => {
      prev[i].done = !prev[i].done
      return [...prev]
    })
  }

  const addItem = item => {
    modifyList( prev => [...prev, {item, done: false} ])
  }

  const onAdd = evt => {
    evt.preventDefault()
    addItem(evt.target.newItem.value)
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <List items={todoList} toggleDone={toggleDone}/>
      <form className="addForm" onSubmit={onAdd}>
        <input className="addForm-input" type="text" name="newItem"/>
        <button className="submit-btn">Add</button>
      </form>
    </div>
  );
}


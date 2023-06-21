import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './Components/List';
import Form from './Components/Form';


import './App.css';

const list = [
  {item: 'learn react', done: false},
  {item: 'do some testing', done: true},
  {item: 'get food', done: false},
  {item: 'sleep 12 hours', done: false},
  {item: 'Finish watching HMYM', done: false},
]

export default () => {

  const [todoList, modifyList] = useState([]);

  useEffect(() => {
    axios.get('/todos').then(res => {
      console.log("DATA !!!");
      console.log(res.data);
      modifyList(res.data);
    })
  }, [])

  const toggleDone = i => {
    modifyList( prev => {
      prev[i].done = !prev[i].done
      return [...prev]
    })
  }

  const addItem = item => {
    // axios.post('/items', {itemData}).then( =>....)
    modifyList( prev => [...prev, {item, done: false} ])
  }

  return (
    <div className="App">
      <h1 className="todo" >All Items to Be Done!</h1>
      <List items={todoList} toggleDone={toggleDone}/>
      <Form addItem={addItem}/>
    </div>  
  );
}


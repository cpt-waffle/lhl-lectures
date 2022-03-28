import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ListItem from './components/ListItem';
import axios from 'axios';
import useApplication from './hooks/useApplication';

function App() {
  const {items, onFormSubmit} = useApplication();
  return (
    <div className="App">
      <h1>Basic Todo List </h1>
      <ListItem items={items} a={'a'} b={'b'} c={'c'} />
      <Form onFormSubmit={onFormSubmit}/>
    </div>
  );
}

export default App;


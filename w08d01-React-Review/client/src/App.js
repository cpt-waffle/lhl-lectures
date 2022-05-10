import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// equivalent to require
import Navbar from './components/Navbar';
import ToDoItemList from './components/ToDoItemList';
import Form from './components/Form';
import useApp from './hooks/useApp';


function App() {
  const {list, handleAddItem} = useApp();

  return (
    <div className="App">
      <Navbar/>
      {list.length > 0 ? <ToDoItemList list={list}/> : <h1>Loading...</h1>}
      <Form handleAddItem={handleAddItem}/>
    </div>
  );
}

export default App;

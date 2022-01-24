import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Form from './components/Form'
import useApplication from './hooks/useApplication';

function App() {
  const {list, addItem, error} = useApplication();

  return (
    <div className="App">
      <h1>Hello REact!</h1>
      <ItemList list={list}/>
      <Form addItem={addItem}/>
      <h1>{error}</h1>
    </div>
  );
}

export default App;

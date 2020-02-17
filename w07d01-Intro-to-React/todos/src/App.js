import React, { useState } from 'react';
import ListItemList from "./components/ListItemList";
import Form from './components/Form'

const items = ['Learn props in react', 'get to lhl', 'work on a project'];


function App() {
  const [list, setList] = useState(items);


  function addItem(val){
    console.log(val);
    setList([...list, val])
  }

  return (
    <div className="App">
      {list.length}
      <ListItemList list={list}/>
      <Form handleAddItem={addItem}/>
    </div>
  );
}

export default App;

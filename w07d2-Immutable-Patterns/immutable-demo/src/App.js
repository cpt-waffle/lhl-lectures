import React, { useState } from 'react';
import './App.css';


function App() {
  const [items, addItems] = useState(['one', 'two', 'three']);
  const renderItems = items.map(i => <li>{i}</li>);

  function handleAddItem() {
    console.log('do i even run!?')
    const cloneItems = items.slice();
    cloneItems.push('four');
    addItems(cloneItems);
  }

  // we push an item into the state
  // then we say HEY REACT HERE IS AN ARRAY THAT WE HAVE HERE ( THAT YOU TOTALLY KNOW WHAT IS )
  // I WANT YOU TO REPLACE WITH THE OTHER ARRAY
  // ok.....
  // items === items ?? is same refernce
  // YEAh! it is no problem!
  // if its same , im not gonna render, not gonna waste my performance....

  console.log("items state is ", items);
  return (
    <div className="App">
      {renderItems}
      <button onClick={handleAddItem}>Click Me!!!</button>
    </div>
  );
}

export default App;

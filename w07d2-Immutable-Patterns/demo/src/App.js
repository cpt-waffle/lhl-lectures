import './App.css';
import React, { useState } from 'react';
// import componnent
import Item from './components/Item';
import ItemList from './components/ItemList';

const array = [
  'strawberry jam', 'Milk', 'Oat Milk', 'coffee beans', 'potato'
]

function App() {

  // What is state?
  // a special variable
  // it stores values ( just like a regular variable) 
  // and ONCE this value changes ( in a specific way...)
  // the react component will RE-render!
  const [a, setA] = useState(102);
  const [list, setList] = useState([...array]);
// 887345: list <---- push()

// setList = (arg) => {
//   list = arg;
//   // MAKE REACT re-render()
// }



  const clickedFunc = () => {
    console.log('this has been clicked!');
    // WRONG WAY OF CHANGING THE VARIABLE
    
    // Alright im going to setA and attempt to re-render
    // a++ it was 102 becomes 103
    // let me check if prev a and new a match
    // no re-render!!

    // IMMUTABILITY 
    // Make copy, change the copy, set that to the state
    // TLDR a copy (shallow-ish copy.?) of your state


    // Spread Operator
    // a way to copy the contents of an object/array to another obj/array
    // this is a shallow copy
////////////////////////////////////////////////// 
    // const newList = [];
    // for (let item of list) {
    //   newList.push(item);
    // }
    // console.log("BEFORE PUSH ", newList);
    // newList.push('beets')
    // setList(newList);
    // console.log("AFTER setList()", newList);

///////////////////////////////////////////
    setList([...list, 'beets']);

    // VirtualDOM

  }
// How are your maps and filter ? 
/////////////////////////////////////////////////
// const htmlList = [];
// for (const item of list) {
//   htmlList.push(<li>{item}</li>)
// }
/////////////////////////////////////////////////
  /// jsx
  // you are able to store HTML in a js array, or object or variable
  // and you render it out same way..

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemList list={list}/>
      <button onClick={clickedFunc}>Click Me</button>
    </div>
  );
}


export default App;

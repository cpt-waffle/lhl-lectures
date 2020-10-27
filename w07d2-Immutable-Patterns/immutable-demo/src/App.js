import React, { useState } from 'react';
import './App.css';
import Row from './components/Row';

// Row is a function called row()
// row(...parameters)
// <Row paramName=val .../>

// Props: is a way to pass down values into a component.
function App() {
  // let multiplyer = 5;
  // state = a variable or variables that can be changed, and when they are changed
  // the react app will re-render, with a new value.
  // 2 parameters, param 1 state name        param 2 function to set the state
  const [multiplyer, setMultiplyer] = useState([
    {valOne: 2, valTwo: 1}
  ]);
  const [number, setNumber] = useState(1);
  // const [number1, setNumber1] = useState(1);


  const incrementMultiplyer = () => {
    const copyMultiplyer = [...multiplyer, {valOne: 2, valTwo: number}]

      setMultiplyer(copyMultiplyer);

    setNumber(number + 1);
    // setNumber1(number1 + 1);

    // multiplyer++; <---- DONT EVER CHANGE STATE LIKE THIS
    // setMultiplyer(multiplyer + 1);
    // ^ setMultiplyer(val) => multiplyer = val AND tell react to re-render!
  }

  const clear = () => {
    setMultiplyer([]);
    setNumber(0);
  }

  // Immutability Patterns
  // never change an original object/array
  // always make a copy, alter the copy
  // and set that new copy with original.
  const addValueIn = () => {
    // example is a state that we ALTERED WITHOUT USING setExample function
    // const exampleCopy = example.slice();  METHOD 1
    // const exampleCopy = example.map( e => e); METHOD 2
    // const exampleCopy = [...example, number];
    // setExample([...example, number]);
    number++;

    // example that you are passing in is [1,2,3,4,5] the original value that im checking right now
    // is [1,2,3,4,5]
  }

  // const Rows = [];
  // console.log(multiplyer)
  // for (let item of multiplyer) {
  //   console.log(item);
  //   Rows.push(<Row valOne={item.valOne} valTwo={item.valTwo}/>)
  // }



  return (
    <div className="App">
      <h2>Multiplication Table</h2>
      <h5>Number of Rows {number}</h5>

      <button onClick={incrementMultiplyer}>Increment</button>
      <button onClick={clear}>Clear</button>

      { multiplyer.map(e => {
        return <Row valOne={e.valOne} valTwo={e.valTwo}/>
      })}
    </div>
  );
}

export default App;

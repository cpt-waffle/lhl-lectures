import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [number, handleNumber] = useState(2);
  const [letters, handleLetters] = useState('a');


  function addNumber() {
    handleNumber(number+1);
  }

  function addLetterA() {
    handleLetters(letters+'a');
  }

  // useEffect( () => {
  //   console.log("number has changed!!!!")
  //   // handleNumber(number+3); 
  // },[number]);

  useEffect( () => {
    // console.log("number has changed!!!!")
    addLetterA();
  },[number]);

  //Run this callback WHEN....
  // useEffect( () => {
  //   console.log('My useEffect Runs ONLY ONCE!!!!')
  // },[]);

  // useEffect( () => {
  //   console.log('RUNS ALL THE TIME')
  // });
  // // USE EFFECTS THAT ARE RAN ON SPECIFIC VALUE CHANGE
  // useEffect( () => {
  //   console.log('the BOTH value has changed')
  // }, [number]);


  //  ^ whatever is in this array
  // console.log("App Rerenders!");
  return (
    <div className="App">
      <p>this is how many 'a's i have {number}</p>
      <p>these are my 'a's is {letters}</p>

      <button onClick={addNumber}>Click me </button>
      <button onClick={addLetterA}>Click me </button>

    </div>
  );
}

export default App;

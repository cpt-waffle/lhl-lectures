import React, { useState } from 'react';
import './App.css';

function App() {
  // num = 0
  // const setNum = (arg) => num = arg /// tells react, something has changed, and makes it re-render the component;
  const [num, setNum] = useState(4);
  const [num2, setNum2] = useState(0);
  const [arr, setArr] = useState([1,2,3]); 

  

  const handleOnClick = () => {
    console.log("HI!!!!");
    console.log(num);
    // num++ <--------- VERY WRONG
    // NEVER EVER EVER CHANGE A STATE DIRECTLY
    // INSTEAD ALWAYS USE the function that was given by useState
    // arr.push(num); <--- NEVER EVER DO THIS TO STATE
    const newArray = [...arr, num];
    // [1,2,3]
    // 4
    //setArray(4);
    setNum(num + 1);
    setArr(newArray);
    // arr = arr.push(num) => 4
    // arr = 4
    // prev [1,2,3,4] curr [1,2,3,4]
    console.log(arr);
  }

  // create a copy, and then set it as original 
  

  const handOnClick2 = () => {
    setNum2(num2 + 1);
  }
  const result = arr.map(elem => <h2>hello world ----  {elem}</h2>)


  // $('button').on('drag', ()=> { ... });
  return (
    <div className="App">
      Nothing Here Yet :(
      <h1>Num 1: {num}</h1>
      <h2>Num 2: {num2}</h2>
      <button onClick={handleOnClick}>NUM1  == number + 1</button>
      <button onClick={() => setNum2(num2 + 1)}>NUM2 == number + 1</button>
      <div>
        {result}
      </div>

    </div> 
  );
}

export default App;

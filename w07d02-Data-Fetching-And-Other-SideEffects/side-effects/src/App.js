import React, { useState, useEffect } from 'react';
import './App.css';


let number = 0;

function App() {

  //document.on('ready')

  //Sideffects <--- BIG BIG BIG PROBLEM



  // 1) the state name, 2) the function to change the state
  const [num, changeNum] = useState(0);
  const [num2, changeNum2] = useState(2);


  useEffect(() => {
    console.log("Im loaded", number);
  }, []);

  // <--- SHORTHAND: Load it once on load, and never again!!!!
  // WHEN NUM changes, execute useEffect <>

  // num = 0;

  // changeNum(1);
  // num = 1
  // RE-RENDER the DOM

  return (
    <div className="App">
    <p>number is {num}</p>
    <p>number is {num2}</p>
    <button onClick={() => changeNum(num+1)}>Add 1</button>
    <button onClick={() => changeNum2(num2+2)}>Add 2</button>

    </div>
  );
}

export default App;

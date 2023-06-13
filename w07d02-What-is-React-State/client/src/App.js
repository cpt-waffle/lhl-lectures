import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import {useState} from 'react';
// react hooks

function App() {
  // const whatAreYou = useState(12); // [state, f() <-- to change state]
  // const number = whatAreYou[0];
  // const changeNumberFunction = whatAreYou[1];
  ////////////////////////////////////////////////////
  const [number, changeNumberFunction] = useState(44); // [variable, functiontochangethatvariable]
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [color, setColor] = useState(0);
  // console.log(whatAreYou[0])
  // events
  // event listeners
  // how to change variables and user sees the change
  // state is a variable
  // 1, 2.5, true/false, [], [{}], {}, {a:{}}
  // 44 + 1 = 45
    // virtual DOM    vs    Regular DOM
  //  {
      // h1 {
          // value: numberState = [45]
      // }
  // }
  //
    // lifecycle methods

  const someoneClickedMyButton = () => {
    console.log("!!!!");
    // re-render

    // number = number + 1 // BAD
    changeNumberFunction(number+1); // GOOD
    globalClick();
    // changeNumberFunction(val) ===> {state = val;  reRenderComponent();  }
  }

  const globalClick = () => {
    setNumberOfClicks(numberOfClicks + 1);
  }


  const colorClick = () => {
    if (color > 1) {
      setColor(0);
    } else {
      setColor(color + 0.1)
    }
  }


  return (
    <div className="App">
      <Navbar 
        numberOfClicks={numberOfClicks}
        color={color}
        colorClick={colorClick}
      />
      <button onClick={colorClick}>Change color</button>
      <h1>{number}</h1>
      <button onClick={someoneClickedMyButton}>
        <h1>Click Me</h1>
      </button>
      <div className="flex">
      <Card globalClick={globalClick}/>
      <Card globalClick={globalClick}/>
      <Card globalClick={globalClick}/>
      <Card globalClick={globalClick}/>
      </div>
    </div>
  );
}

export default App;

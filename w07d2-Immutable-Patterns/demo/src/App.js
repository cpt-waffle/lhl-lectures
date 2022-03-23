import './App.css';
import { useState } from 'react';

// a function that returns JSX
// reason to make components?
// re-usable UI elements 
// tinyapp templates are very close to components

// $(document).on('ready', () => {
  // $('#id').on('click') 
// })
//


// state is JUST a variable
// BUT it does a secondary operation OTHER than changing a value..


function App() {
  // let number = 23;
  const [number, setNumber] = useState(23);
  const [cats, setCats] = useState(['puma', 'rosy', 'mr buttons']);

  const addOne = () => {
    // Never change state directly
    setNumber(number + 1);
    // number = argument
    // RE-RENDER THE ENTIRE COMPONENT FROM TOP TO BOTTOM;
  }



  const addANewCat = () => {
    const name = 'Alan';
    // everything should be a new instance 
    // everything should be a modified copy
    // and whenever we need re-place the original..
    // we make a copy of the original and then alter it
    //  AND THEN REPLACE IT...
    
    // to make a copy of an array, loop and push everything into a new array..
    // for (let cat of cats) {
    //   catsCopy.push(cat);
    // }
    catsArr = [ ['vixen'], ['alie'], ['rudolph']]
    const catsCopy = [...cats, name];
    setCats(catsCopy);
  }



// Virtual DOM
//   |------>

// state i have right now is EQUAL to the state that is being passed through to change?
// setCats = (newState) => {
//   if (newState === oldState)
//   // do nothing
//   else {
//     change state
//     re-render
//     do everything else...
//   }
// }
// ////////////////////////////////
// {
//   'div-app': {
//     'h1-basic1': { value: 'hello world'}
//     'h2-basic1': { value: 'Number is {state.number}'}

//     'li-basic1': {value: state.cats[0]}
//     'li-basic1': {value: state.cats[1]}
//   }
// }



  return (
    <div className="App">
      <h1>Hello React!@</h1>
      <h2>Number is {number}</h2>
      <button onClick={addOne}>Add One</button>
      ------------------------------------------
      {cats.map(e => <li>{e}</li>)}
      <button onClick={addANewCat}>ADD ONE MORE CAT</button>

    </div>
  );
}

export default App;

#### Reducers in React

A reducer is a `PURE` function that takes in 2 arguments: Previous State, and action. The reducer than returns a new state.

```js
const myAwesomeReducer( prevState, action) => {
  // use the action type and payload to create a new state based on
  // prev state...

  return newState;
}

```

Reducers are `pure` functions!!!! This means we do `NOT` mutate the arguments that are being passed to it.

#### What is Action??

Action is a javascript object. it contains two keys: `action`, `payload`. `action`, what type of action do you want to be performed, `payload` what value do you want to be added or changed to the `prevState`.


#### How do We start Maing them?

1.

Make a function called `reducer` which will take 2 params

```js
function reducer(state, action) {
  if (action.type === 'ADD_MEME') {
    const number = state.numberOfMemes + 1;
    const newMemesArr = [...state.memes, action.value]
    return { ...state, numberOfMemes: number, memes: newMemesArr }
  }
}
```
Action type will dicatate what operation needs to happen.
action Value will be the value that will needed to be added.
state will be previous state.


2.

```js
import { useReducer } from "react";

// default state setup
const initial = {
  numberOfMemes: 0,
  memes: []
}


export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initial)

  const addMeme = meme => {
    const tempMeme = {url: meme};
    dispatch({type: 'ADD_MEME', value: tempMeme});
  }
}

return {state, addMeme};
```

declare the use reducer Hook, and use the `reducer` function with
an initial default data ( just like default `state` ).

The use reducer will return you a state, and a dispatch().
Dispatch will be use to call the reducer function we made, and send it specifc action with value.


#### Overall Look


```js
//application.js -- JUST STATE LOGIC

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'ADD_MEME') {
    const number = state.numberOfMemes + 1;
    const newMemesArr = [...state.memes, action.value]
    return { ...state, numberOfMemes: number, memes: newMemesArr }
  }
}
const initial = {
  numberOfMemes: 0,
  memes: []
}


export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initial)

  const addMeme = meme => {
    const tempMeme = {url: meme};
    dispatch({type: 'ADD_MEME', value: tempMeme});
  }

  return {state, addMeme};
}
//
//
////App.js
import React from 'react';
import './App.css';
import useApplicationData from './application'

function App() {
  const {state, addMeme} = useApplicationData();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMeme(evt.target.url.value);
  }

  return (
    <div className="App">
      <h1>REDUCE MY LIFE</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {state.memes.map( (meme, index) => <li key={index}>{meme.url}</li>)}
        </ul>
        <input type="text" name="url"/>
        <button>ADD + </button>
      </form>
    </div>
  );
}

export default App;
```
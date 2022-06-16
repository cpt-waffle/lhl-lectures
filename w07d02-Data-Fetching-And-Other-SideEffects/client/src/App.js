import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import MemeList from './components/MemeList';
import Form from './components/Form';


function App() {

  // State //
  // is a special variable, that when changed, the component also re-renders !!
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [memes, setMemes] = useState([]);

  // UseEffect //

  // this use effect will run once, on first render
  // and again anytime whenever something gets re-rendered

  // useEffects are used for, side-effect
  // -- fetching data from the server
  // -- grabbing a specific html element and changing its value
  // -- setting up event listeners for a specific html/js value
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  useEffect(() => {
    console.log("Line 15 ?!?!!?");
  });

  // useEffect actually takes 2 parameters
  // -- callback
  // -- an array ( depedancy )
  /// JQuery 
  // document.on('ready' () => {
      // $.ajax('/tweets')
  // })
  useEffect(() => {
    console.log("USE EFFECT HAS NOTHING IN IT!!");
    // proxy <==
    // -- turn off client
    // -- go to package.json
    // -- add "proxy": "", key/val pair
    // -- add the base url to val of proxy ^
    axios.get('/memes').then(res => {
      console.log("data has come back!");
      setMemes(res.data);
      console.log(res);
    })
  }, []) // <--- depedancy array 
  // dependancy array [] <-- values inside, are being watched by the use Effect
  // whenever, any value changes within that useEffect, the useEffect will run

  useEffect(() => {
    console.log("NUM 2 HAS CHANGEDD!!!!!!!");
  }, [num2]) 


  // How do we work with rendering cycles?
  // how do we do things once before the render and not again?
  // how can we control things to happen once something rendered?
  //////////////// useEffect ///////////////////////////////////
  // a hook that deals with side-effects of react (and rendering)


  // JQUERY - Ajax 
  // if I wanted to make a get request
  // $.get('http://localhost:8080/memes', (data) => {
    // $('article').append(data)
  // })

  // fetch -- not going to use it because tiny bit complex
  // axios -- 
  /////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////


  const onNumClick = () => {
    setNum(num + 1);
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MemeList list={memes} />
      <p><button onClick={onNumClick}>The value of Num is == { num }</button></p>
      <p><button onClick={() => setNum2(num2 + 2)}>NUM2 == { num2 }</button></p>
      <Form/>
    </div>
  );
}

export default App;

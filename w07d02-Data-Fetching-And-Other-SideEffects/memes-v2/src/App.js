import React, { useState, useEffect } from 'react';
import './App.css';
import MemeList from './Components/MemeList';
import Form from './Components/Form';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
// some sort of mock data that i got from a cool api (more on that tomorrow!!)




function App() {
  const [memeCounter, handleMemeCounter] = useState(0);
  const [memes, handleMemes] = useState([]);


  //
  useEffect(() => {
    axios.get('/memes').then( response => {
      console.log("HOPEFULLY EVERYTHING OK!?")
      handleMemes(response.data);
    })
  }, [])


  useEffect( () => {
    handleMemeCounter(memes.length);
  }, [memes])

  // Props always go down the tree
  // propagations run up 
  function addFreshMeme(n, u) {
      // alert('do i even work!?!?');
      const copy = [...memes, {name: n, url: u}];
      // TODO make an edit form 
      handleMemes(copy);
  }
  return (
    <div className="App">
      <h1>Total Number of Memes: {memeCounter}</h1>
      <Form add={addFreshMeme}/>
      <MemeList list={memes} i={2}/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meme from './components/Meme';

function App() {

  const [memes, setMemes] = useState([]);
  const [number, setNumber] = useState(1);
  // GET DATA FROM SERVER!!!
  // JQUERY ----> ajax ------> fetch()
  // AXIOS -----> fetch  ------ 

  useEffect(() => {
    // side-effects --- GET DATA from somewhere on intial load 

    // days
    // appointments
    // interviewers
    //  GET /days
    //  GET /appointmnets
    //  GET /interviews
    axios.get('http://localhost:8080/memes').then(response => {
      console.log('DATA HAS COME BACK IN!!!');
      console.log(response);
      setMemes(response.data);
    })
  }, []);

  // const memesHTMLArray = [];

  // for (let item of memes) {
  //   console.log(item)
  //   memesHTMLArray.push(<Meme name={item.name} imgURL={item.url}/>)
  // }

  const memesHTMLArray2 = memes.map(( item ) => {
    return <Meme name={item.name} imgURL={item.url}/>
  })

  // map
  // forEach
  // reduce
  // filter

  const addOne = () => {
    setNumber(number + 1);
  }


  return (
    <div className="App">
      <h1>Hello World :) {number}</h1>
      <button onClick={addOne}>ADD ONE</button>
      { memesHTMLArray2 }
    </div>
  );
}

export default App;

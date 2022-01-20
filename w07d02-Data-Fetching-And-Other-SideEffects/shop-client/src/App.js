import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductListItem from './components/ProductListItem';

// State -- control, tracks, hook 

/////////////// Tweeeter ////////////////
// you had to get all the tweets from the sever ?
// how did you do it ?
// you visit page
// page loads all the html, css
// it builds your functions like createTweetElement() createTweetsElements() 
// $(document).on('ready',() => { ajax() => createTweetsElements(data)  })



function App() {
  // state is a variable... BUT its special
  // because when state changes ( the right way..) it will tell the 
  // component to re-render
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [items, setItems] = useState([]);

  // runs on "EVERY" re-render just before you see the content appear on the page...
  useEffect(() => {
    // axios / fetch <----
    axios.get('/products').then((response) => {
      console.log(response);
      setItems(response.data);
    })



    // data fetching...
    // We want to getch the data from the server
    // store the data somwhere
    // we want to SHOW the data for the users to see...


    // changing something that is not in react...
    // setting timers/intervals
    // setNumber(number + 1);
    console.log("Hello World!");
  }, [])
  // EVERY USE-EFFECT 
  // takes 2 parameters 
  // 1 -- function()
  // 2 -- an array[] ===> dependacy array
   //  this dependancy array can control WHEN the use-effect will fire

  useEffect(() => {
    console.log("NUMBER STATE HAS CHANGED!!!");
  }, [number])

  const addOne = () => {
    // setNumber = (arg) => number = arg; re-renderApp(); 
    setNumber(number + 1)
    console.log(number);
  }

  const itemsList = items.map((item) => {
    return <ProductListItem key={item.id} name={item.name} price={item.price} img={item.img}/>
  })
// 
// 

  return (
    <div className="App">
      <h1>Meme Shop!</h1>
      {items.length ? itemsList : <h1>Loading.....</h1>}
    </div>
  );
}

export default App;


// {number}
// <button onClick={addOne}>Add One!</button>
// {number2}
// <button onClick={() => setNumber2(number2 + 1 )}>Add One!</button>
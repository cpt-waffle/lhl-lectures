import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeList from './Components/MemeList'

const memeList = [
  {name: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {name: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {name: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {name: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
];




function App() {
  // let number = 33;
  //the value, the function to change the value

  const [number, addOne] = useState(33);
  // let number = 33; 
  // addOne = n => number = n; 

  const handleAddOne = () => {
    let temp = number; // NEVER EVER EVER EVER EVER EVER use the state variable and change its value 
    //always make a copy 
    addOne(temp + 1);
  }
  // function addOne() {
  //   number++;
  //   console.log(number);
  // }
//$('#btn #addOne').on('click', (evt) => { ... })

  return (
    <div className="App">
      <h1>THIS IS MY NUMBER =========>>>{number}</h1>
      <button onClick={handleAddOne}>CLICK ME</button>
      <MemeList list={memeList} i={number}/>
    </div>
  );
}

export default App;

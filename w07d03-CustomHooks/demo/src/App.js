import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GeneralForm from './GeneralForm';
import UserForm from './UserForm';



// USE EFFECT


function App() {
  const [memes, setMemes] = useState([]);
  // const [number, setNumber] = useState(0);
  // Pay attention on what your use effect params are! YOu can accidently make an infinite loop!
    // useEffect(() => {
    //   axios.get('http://localhost:8080/memes').then( res => {
    //     console.log(res);
    //     setMemes(res.data)

    //   })
    // }, [])

    // 
  return (
    <div>
      <h1>Form Stuff here</h1>
      <GeneralForm/>
      <UserForm/>
    </div>
  );
}

export default App;







  {/* {memes.map( (meme, index) => <div key={index}>
  <p>{meme.name}</p>
  <img style={{width: '240px', objectFit: 'cover'}} src={meme.url}/>
  </div>)} */}
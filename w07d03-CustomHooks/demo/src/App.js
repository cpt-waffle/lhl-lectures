import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GeneralForm from './GeneralForm'
import UserForm from './UserForm'


function App() {
  const [memes, setMemes] = useState([]);
  
  useEffect(() => {
    console.log('use Effect Runs!!');
    axios.get('http://localhost:8080/memes').then( response => {
      setMemes(response.data)
      console.log(response);
    })
  }, [])

  console.log('App has been loaded!');

  return (
    <div>
      <h1>Form Stuff here</h1>
      <GeneralForm/>
    </div>
  );
}

export default App;







  {/* {memes.map( (meme, index) => <div key={index}>
  <p>{meme.name}</p>
  <img style={{width: '240px', objectFit: 'cover'}} src={meme.url}/>
  </div>)} */}
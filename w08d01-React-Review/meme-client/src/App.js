import './App.css';
import { useState, useEffect } from 'react';
import Navbar, {DarkNavBar} from './Components/Navbar';
import MemeList from './Components/MemeList';
import Form from './Components/Form';
import axios from 'axios';

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('/memes').then(res => {
      console.log(res);
      setMemes(res.data)
    })
  }, [])
  // ^ an array (dependacy array)
  const addMeme = (title, img) => {
    console.log("HELLO!!!!")
    console.log(title, img);
    console.log('---------------');
    // immutable patterns
    setMemes(prev => ([...prev, {title, img}]));

    
  }

  return (
    <div className="App">
      <Navbar/>
      <DarkNavBar/>
      <Form addMeme={addMeme}/>
      <h1>Meme App!</h1>
      <MemeList list={memes} />
    </div>
  );
}

export default App;

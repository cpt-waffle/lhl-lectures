import React, { useState } from 'react';
import './App.css';
import Meme from './components/Meme';
import Form from './components/Form';

function App() {
  const [memes, handleMemes] = useState([]);

  function addFreshMeme(n, u) {
    console.log(n,u)
  }

  return (
    <div className="App">
      <Form add={addFreshMeme}/>
      <div>
            {memes.map(meme => <Meme name={meme.name} url={meme.url} i={meme.num}/>)}
      </div>
    </div>
  );
}

export default App;

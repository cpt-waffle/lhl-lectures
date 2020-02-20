import React, { useState, useEffect } from 'react';
import './App.css';
import useApplicationData from './application'




function App() {
  const {state, addMeme, removeMeme} = useApplicationData();
  const handleSubmitMeme = evt => {
    evt.preventDefault();
    addMeme(evt.target.memeURL.value);
  }
  const [t, ttt] = useState(0);

  const [num, handleNum] = useState(1);
  const [numTwo, handleNumTwo] = useState(1);


  const handleRemoveMeme = i => {
    removeMeme(i);
  }


  useEffect( () => {
    ttt( n => n + 1);
    console.log("NUMBER HAS BEEN SET")
  }, [num, numTwo])

  console.log(state.memesList);

  return (
    <div className="App">
      <p>MEMES</p>
      {t}
      <p>REgul Num{num}</p>
      <p>Two Num {numTwo}</p>
      <button onClick={() => handleNum(n => n+1 )}>ON CLICK</button>
       <button onClick={() => handleNumTwo(n => n+1 )}>ON CLICK 2</button>
      {state.memesList.map((meme, i) => <img onClick = {() => handleRemoveMeme(i)} key={i} src={meme.url}/>)}
      <form onSubmit={handleSubmitMeme}>
        <input type='text' name='memeURL'/>
        <button>ADD MEME</button>
      </form>
    </div>
  );
}

export default App;

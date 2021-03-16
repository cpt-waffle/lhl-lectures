import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {

  const [memes, setMemes] = useState([]);

  const handleAddMeme = (val) => {
    console.log('HELLO WORLD! LINE 11 APP.js')
    console.log(val);
    // for (const item of memes) memesCopy.push(item);
    // memesCopy.push(val);
    // const memesCopy = [...memes, val];
    setMemes([...memes, val]);



    // WRONG WAY
    // memes.push(val);
    // setMemes(memes);
  }  

  const renderMemes = [];
  for (const item of memes) {
    renderMemes.push(<img style={{width: '200px', objectFit:'cover'}}src={item}/>)
  }

  return (
    <div className="App">
      Hello World :)
      <Form handleSubmit={handleAddMeme}/>
      {renderMemes};
    </div>
  );
}

export default App;

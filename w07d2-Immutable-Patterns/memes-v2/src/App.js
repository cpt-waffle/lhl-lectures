import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Meme from './components/Meme';


function App() {
  const [memes, setMemes] = useState([{img: 'https://i.pinimg.com/originals/b8/2d/a4/b82da434ed0b91d1928e4877f4011753.jpg'}])

  // const result = [];
  // for (let meme of memes) {
  //   result.push(<Meme img={meme.img}/>)
  // }
  const result = memes.map( meme => <Meme img={meme.img}/>);
  const apple = 'apple';
  const handleAddMeme = (url) => {
    console.log("URL PASSED IN", url);
    console.log(memes);
    setMemes([...memes, {img: url}]);
    console.log("IM HANDLING MY MEME SUBMISSION");
  }

  return (
    <div className="App">
      <Form fruit={apple} handleAddMeme={handleAddMeme}/>
      {result}
    </div>
  );
}

export default App;

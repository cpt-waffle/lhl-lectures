import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme from './Components/Meme';

const arrayOfMemes = [
  {title:'test', imgURL:'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg'},
  {title:'another meme', imgURL:'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg'},
]

function App() {
  let greetings = <h1>Hello world</h1>
  // let array = [];
  // for (let meme of arrayOfMemes) {
  //   let tempMeme = <Meme title={meme.title} imgURL={meme.imgURL}/>
  //   array.push(tempMeme);
  // }
  let array = arrayOfMemes.map(meme => <Meme title={meme.title} imgURL={meme.imgURL}/>)
  return (
    <div className="App">
      {array}
    </div>
  );
}

export default App;

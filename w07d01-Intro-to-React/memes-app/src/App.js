import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Meme from './components/Meme';

let x = [ <h1></h1>]

let arr = [
  {pic:'https://i.kym-cdn.com/entries/icons/mobile/000/016/030/carllll.jpg', name: 'Coooral memes?', likes: 2},
  {pic: 'https://i.chzbgr.com/full/9393093632/h266B0753/funny-and-cute-meme-about-a-parrot-bromance' ,name: 'Parrot!!', likes: 20},
  {pic: 'https://usatftw.files.wordpress.com/2017/05/spongebob.jpg',name: 'SpOnG3BoB', likes: 23},
  {pic:'https://i.chzbgr.com/full/9454205952/h4075CC49/10-mars-2020-2211-utc1-coronavirus-coronavirus-posted-rcoronavirusmemes-by-uadiran321-reddit-ii' ,name: 'Corona', likes: 4},
  {pic: 'https://i.imgur.com/jHnq57U.jpg',name: 'harry potter dev' , likes: 44},

]


function App() {
  const [memeList, changeMemeList] = useState([]);
  const nemes = arr.map( meme => 
    <Meme
      obj={meme}
      pic={meme.pic} 
      name={meme.name} 
      likes={meme.likes}
      
    />)
  return (
    <div className="App">
      <h1>Awesome Meme List!!!!</h1>
      {nemes}
    </div>
  );
}

export default App;

//that's nutty
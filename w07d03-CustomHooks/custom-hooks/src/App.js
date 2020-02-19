import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeList from './MemeList';

const goodMemes = [
  {url: 'https://external-preview.redd.it/5UTpgx6zRfZeCQHLvxB81U0naxxmrBc_GKtiy3K2BTo.jpg?width=960&crop=smart&auto=webp&s=e31abd9516e6a630b6df349f9abc6a938ccfb2e3'
  , name: 'branch works'},
  {url: 'https://ichef.bbci.co.uk/news/497/cpsprodpb/D1A6/production/_86407635_sceptical5.png'
   , name: 'Are you Kidding me'},
  {
    url: 'https://pics.me.me/me-accidentaly-reveals-something-dark-somebody-i-just-met-omg-65666077.png'
    ,name: 'O look a hat'
  },
  {
    url: 'https://pics.me.me/one-does-not-simply-use-this-in-javascript-%60this%60-sucks-43527317.png',
    name: 'Does not simply'
  }
]

const badMemes = [
  {
    url: 'https://memestatic.fjcdn.com/pictures/Bad_027fcf_6561414.jpg'
  }
]


function App() {
    return (

      <div className="App">
        <h1>There are memes here</h1>
        <MemeList api={goodMemes}/>
        <MemeList api={badMemes}/>

      </div>
    );
}

export default App;

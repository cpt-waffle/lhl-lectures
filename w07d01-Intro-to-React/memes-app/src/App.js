import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meme from './components/Meme';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="App">
        <Meme/>
        <Meme img={'https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg'} title={'Belive in Yours Dreams!!'}/>
        <Clicker/>
    </div>
  );
}

export default App;

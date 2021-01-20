// useEffect is a Hook just like useState
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Meme from './components/Meme'

function App() {
  const [number, setNumber] = useState(1);
  const [average, setAverage] = useState(1);
  const [memes, setMemes] = useState([]);
  const [favMeme, setFavMeme] = useState({});

  const handleNumber = () => {
    setNumber(prev => prev + 1);
    setAverage(number / 2)

  }

  // api/appointments
  // api/days
  // {appointments: [1,2,3,4]}
  useEffect(() => {
    //Promise.all
    console.log("Hello??")

    Promise.all([
        axios.get('/memes'), 
        axios.get('/favorite')
      ]
    ).then(res => {
      const allMemes = [...res[0].data, res[1].data]
      setMemes(allMemes);
    })

  }, [])
// component did mount? document.onreadY?
// component will mount?
// component will update?

// used case for []

// i click buy on an item, the state adds it into the cart
// use effect runs to calcuate how much money is total


  // is array of parameters that will be watched
  return (
    <div className="App">
      <h1>Hello World!!s</h1>
      <h2>Dislikes!{number}</h2>
      <h3>Average{average}</h3>
      <h2>MY FAVORITE MEME</h2>
      <Meme name={favMeme.name} url={favMeme.url}/>
      <button onClick={handleNumber}>Add One</button>
      {memes.map(meme => <Meme name={meme.name} url={meme.url}/>)}
    </div>
  );
}

export default App;

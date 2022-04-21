import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MemeCard from './components/MemeCard';

// How to get data, from a server to a client?
// Tweeter <--- 
// backend-server, that contains the tweets
// front-end -- asks for the tweets, using ajax jquery/fetch and renders it on
// the screen
// axios <-- fetch()


function App() {
  // when state changes, the component RE-RENDERS <------------
  const [memes, setMemes] = useState([]);
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(33);

  // how do we write useEffect

  // 1st param --- a callback function
  // 2st param --- an array that may contain dependencies 
  useEffect(() => {
    console.log('Hello world')

  });


// /api/days         --> give me all the days and spots and 
// /api/appointmnets --> give me all appointmnets
// /api/interviewers --> give me a list of interviewers

// snake game //http server <--
// socket, web-socket, (TCP -- (net))

// VIRTUAL DOM!!!!!
// 
 
//  DOM getElementById().values9

// Virtual DOM
// {
//   divElement0420221223: {
//     className: 'App'
//     children: {
//       memeCardElement0420221224-0: {}
//       memeCardElement0420221224-1: {}
//       memeCardElement0420221224-2: {}
//       memeCardElement0420221224-3: {}

//     }
//   }
// }


  useEffect(() => {
    // socket declration goes here
    // and of my events go here as well
    axios.get('/memes').then(res => {
      setMemes(res.data);
    })
    console.log('render only once');
  }, []);

  useEffect(() => {
    console.log("memes has changed")
  }, [memes])
     

  return (
    <div className="App">
      <h1>Hello World :)</h1>
      {memes.map(meme => <MemeCard key={meme.id} img={meme.url} title={meme.name}/>)}
      Number is <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>CLICK ME</button>
      Number is <h1>{num2}</h1>
      <button onClick={() => setNum2(num2 + 1)}>CLICK ME</button>
    </div>
  );
}

export default App;

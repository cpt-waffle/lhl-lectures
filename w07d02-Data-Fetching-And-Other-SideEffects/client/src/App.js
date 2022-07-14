import React, { useState, useEffect } from 'react';
import './App.css';
// import axios
import axios from 'axios';
import Poster from './components/Poster';


function App() {
  // What if we can do an operation, after everything has finished rendering?
  // What if we can do an operation, on the "side"?


  const [memes, setMemes] = useState([]);
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);

  // const [arr, setArr] = useState([{a: 1}, {a: 2}, {a: 3}]);

  // you can have as many useEffects as you wish 
  // you make useEffects after your states have been declared
  useEffect(() => {
    axios.get('/memes')
    .then(resp => {
      console.log(resp);
      setMemes(resp.data);
    })
  }, [])
  //  ^--- the dependancy array
  // 
  // const arrHTML = [];
  // for (let obj of arr) {
  //   arrHTML.push(<h1>{obj.a}</h1>)
  // }
  ///////////////map()//////////////////
  // const arrHTML2 = arr.map((obj) => {
  //   return <h1>{obj.a}</h1>
  // })


  console.log("we are running again!!");

  const memesList = memes.map(meme => {
    return <Poster key={meme.id} name={meme.name} imgURL={meme.url}/>
  })



  return (
    <div className="App">
      <h1>The Page of Memes!</h1>
      {memesList}
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>

    </div>
  );
}

export default App;

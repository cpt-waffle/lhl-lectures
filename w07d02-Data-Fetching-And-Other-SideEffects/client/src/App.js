import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MemeContainer from './components/MemeContainer';


function App() {

  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  const [memes, setMemes] = useState([]);

  // 

  // useEffect deals with side-effects
  // side-effects are functions: data fetching functions, event listener functions
  // that need to be declared/ran as soon as the FIRST render happens!

  // useEffect, takes a callback, AND an ARRAY that will run just after the component has rendered
  // and appeared on the page
  // -- ANY use effect will run atleast ONCE when declared
  useEffect(() => {
    console.log("our basic use-effect")
  })


  // this is the useEffect type you will work with throught scheduler!
  useEffect(() => {
    console.log("Ony ONCE!!!");
    axios.get('/memes').then(res => {
      console.log(res);
      setMemes(res.data);
    })
  }, []) // <--- the dependancy ARRAY

  useEffect(() => {
    console.log("only change when the depedancy changes!");
  }, [num])




  // const array = [];

  // for (let meme of memes) {
  //   array.push(<h1>{meme.name}</h1>)
  // }
  // [1,2,3,4]  map ( x 2 )===>  [2,4,6,8]
  // [{}, {}]  map (<h1>...</h1>) ===> [<h1>...</h1>, <h1>...</h1>] 
  const array = memes.map(meme => {
    return <MemeContainer key={meme.id} id={meme.id} name={meme.name} url={meme.url}/>
  })

  // axios.get('/memes').then(res => {
  //   console.log(res);
  //   // setMemes(res.data);
  // })
  // const array = [<h1>Hello World</h1>, <h2>Hi</h2>, <h4>test</h4>]

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h3>NUM {num}</h3>
      <h3>NUM1 {num1}</h3>

      {array}

      <button onClick={() => setNum(prev => prev + 1)}>Click me</button>
      <button onClick={() => setNum1(prev => prev + 1)}>Click me</button>


    </div>
  );
}

export default App;

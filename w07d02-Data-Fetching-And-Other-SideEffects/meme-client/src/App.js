import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MemeMachineList from './components/MemeMachineList';

function App() {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(2);
  const [memes, setMemes] = useState([]);

  console.log("Hello !!");
  const addOne = () => {
    setNum(num + 1); // all state changes are async
  }


  // useEffect(() => {
  //   console.log('we have rendered!');
  //   console.log('-----');
  //   axios.get('/memes').then(res => {
  //     console.log('data');
  //     console.log(res.data);
  //     // setMemes(res.data);
  //   })

  // }) 
  useEffect(() => {
    axios.get('/memes').then(res => {
      console.log('data');
      console.log(res.data);
      setMemes(res.data);
    })
  }, [])



  useEffect(() => {
    // axios.get('/memes').then(res => {
    //   console.log('data');
    //   console.log(res.data);
    //   setMemes(res.data);
    // })
  }, []) // <------------- the dependancy array
  // put variable(s) into array, if variable(s) change, run the useEffect
  // if array is empty, only run it once on the initial app render
  // useEffect(() => {
  //   axios.get('/memes').then(res => {
  //     console.log('data');
  //     console.log(res.data);
  //     // setMemes(res.data);
  //   })
  // }, [memes])



  // AJAX
  // $.get() // AJAX
  // fetch()
  // axios
  // proxy applies to development and assuming that server/client are on the same
  // host
  // axios.get('/memes').then(data => {
  //   console.log('data');
  //   console.log(data);
  //   // setNum(num + 1);
  // })
  // const arr = [];
  // for (let meme of memes) {
  //   arr.push(<MemeMachine title={meme.name} img={meme.url}/>)
  // }
  

  return (
    <div className="App">
      <h1>hello World!</h1>
      <h1>Number is {num}</h1>
      <h1>Number2 is {num2}</h1>

      <button onClick={addOne}>Click me!</button>
      <button onClick={() => setNum2(num2 + 2)}>Click me2!</button>
      <MemeMachineList memes={memes}/>
    </div>
  );
}

export default App;

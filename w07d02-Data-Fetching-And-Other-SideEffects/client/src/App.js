import { useState, useEffect } from 'react';
import './App.css';
// import axios
import axios from 'axios';
import Poster from './components/Poster';


function App() {

  const [memes, setMemes] = useState([]);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(10);

  useEffect(() => {
    console.log("our first use Effect!")
  })

  useEffect(() => {
    console.log("****")
    axios.get('/memes').then(response => {
      console.log("data has come back!");
      setMemes(response.data);
      console.log(response);
    }).catch(e => {
      
    })
  }, [])
  // ^ the dependency array

  useEffect(() => {
    console.log('useEffect With NUM2')
  }, [num2])

  // const array = [];
  // for (let meme of memes) {
  //   array.push(<Poster name={meme.name} img={meme.url}/>)
  // }

  const arr = memes.map( meme => {
    return <Poster name={meme.name} img={meme.url}/>
  })



  return (
    <div className="App">
      <h1>Hello World!</h1>
      {arr}
      <button onClick={() => setNum1(num1 + 1)}>Num1 = {num1}</button>
      <button onClick={() => setNum2(num2 + 1)}>Num2 = {num2}</button>

    </div>
  );
}

export default App;

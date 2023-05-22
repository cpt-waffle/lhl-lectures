import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Poster from './components/Poster';
import PosterList from './components/PosterList';

function App() {
  const [posters, setPosters] = useState([]);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(10);


  useEffect(() => {
    console.log("anytime any render or re-render happens");
  })

  useEffect(() => {
    // async
    axios.get('/posters').then(res => {
      console.log("response is back!");
      console.log(res.data);
      setPosters(res.data); // time to re-render the application
    }).catch(e => {
      console.log("sad face :(");
      console.log(e);
    })
  }, []); // <---- dependacy array


  useEffect(() => {
    setTimeout(() => {
      setNum(prev => prev + 20)
      setNum2(prev => prev + 20);
    }, 7000)
  }, []);

  return (
    <div className="App">
      <h1>Data Fetching and Side Effects!</h1>
      <button onClick={() => setNum(prev =>  prev + 1)}><h1>{num}</h1></button>
      <button onClick={() => setNum2(prev =>  prev + 1)}><h1>{num2}</h1></button>


      <PosterList posters={posters}/>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import MemeList from './components/MemeList';

function App() {

  // RENDERING CYLCE OF REACT ---
  const [memes, setMemes] = useState([]);

  const [num, setNum] = useState(1);

  // this specific one useEffect Runs EVERYTIME the app re-renders....
  useEffect(() => {

  })

  // this runs once, (on first render) and never again
  useEffect(() => {
    axios.get('/memes').then(res => {
      console.log('response', res);
      setMemes(res.data);
    })
  }, []) // <--- dependancy array

  useEffect(() => {
    console.log("number has changed!");
  }, [num])

  const onClick = (num) => {
    console.log("Line 31: App.js");
    console.log(num);
    setMemes([]);
  }

  // ----- Side Effect -----
  // $.ajax()
  // $.get('/memes', (data) => { ... })
  // axios.get('/memes').then(res => {
  //   console.log('response', res);
  //   // setMemes(res.data);
  // })

  const memelist = memes.map( meme => {
    return {id: meme.id, img: meme.url, title: meme.name};
  })

  return (
    <div className="App">
      <h1>W7d4 - Data Fetching in React</h1>
      <MemeList list={memelist} banana={onClick}/>
    </div>
  );
}

export default App;

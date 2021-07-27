import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './components/Card';

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // 3002 was the nodeJS server
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log("DATA IS HERE");
      console.log(res.data.dogs);
      setDogs(res.data.dogs)
    })

    axios.get('http://localhost:3000/cats').then(res => {
      console.log("DATA IS HERE FROM CATS");
      console.log(res.data);
      setCats(res.data.cats);
    })
  }, []) // dependancy array
  // you usually put states in this array
  // when the state changes, the useEffect fires

  // Server on 3002
  // React App on 3001

  // Req ----------------> Server
  //                im running on 3002 , req is coming from 3001 (different)
  //                someone is trying to hijack me, access denied!


  return (
    <div className="App">
      <h1>Dogs</h1>

      {dogs.length === 0 ?
        <h2>Loading....</h2>
      :      
        dogs.map((dog,index) => {
          return (
            <Card key={dog.id} url={dog.url} name={dog.name}/>
          )
        })
      
      }
      <h1>Cats</h1>

      {cats.length === 0 ?
        <h2>Loading....</h2>
      :      
        cats.map((cat,index) => {
          return (
            <Card key={cat.id} url={cat.img} name={cat.name}/>
          )
        })

      }
    </div>
  );
}

export default App;

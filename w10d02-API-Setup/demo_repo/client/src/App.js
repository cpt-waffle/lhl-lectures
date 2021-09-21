import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card'

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3002/dogs').then(response => {
      setDogs(response.data);
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/cats').then(response => {
      setCats(response.data);
    })
  }, [])


  return (
    <div className="App">
      {dogs.length ? 
        dogs.map(dog => <Card key={dog.id} img={dog.url} name={dog.name}/>) 
        :
        <h2>Loading....</h2>
      }
      {cats.length ? 
        cats.map(cat => <Card key={cat.id} img={cat.img} name={cat.name}/>) 
        :
        <h2>Loading....</h2>
      }
    </div>
  );
}

export default App;

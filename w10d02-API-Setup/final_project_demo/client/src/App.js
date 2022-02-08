import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import axios from 'axios';

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);


  useEffect(async () => {
    const response = await axios.get('http://localhost:8080/dogs');
    setDogs(response.data)
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/cats').then((response) => {
      console.log("data!!");
      setCats(response.data);
    })
  }, [])


  return (
    <div className="App">
      {dogs.map(dog => {
        return <Card key={dog.id} img={dog.url} name={dog.name}/>
      })}
      {cats.map(cat => {
        return <Card key={cat.id} img={cat.img} name={cat.name}/>
      })}
    </div>
  );
}

export default App;

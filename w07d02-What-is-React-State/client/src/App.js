import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';

function App() {

  const [users, setsUsers] = useState([
    {
      name: 'Vas',
      title: 'instructor'
    },
    {
      name: 'Beth',
      title: 'Marketing'
    },
    {
      name: 'Charley',
      title: 'developer'
    },

  ]);

  const [totalLikes, setTotalLikes] = useState(0);

  const onTotalClick= () => {
    setTotalLikes(totalLikes + 1);
  }

  
  const cards = users.map(user => {
    // array.push(...)
    return <Card name={user.name} title={user.title} onTotalClick={onTotalClick}/>
  })
  return (
    <div className="App">
      <Navbar totalLikes={totalLikes}/>
      <h1>{totalLikes}</h1>
      {cards}
      {/*Card({name: 'Vas', title: 'Instructor})*/}
    </div>
  );
}

export default App;

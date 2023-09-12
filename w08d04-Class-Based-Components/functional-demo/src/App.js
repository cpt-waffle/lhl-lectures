import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const img = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700"
  const name = 'Mr Meows';
  const title = 'Senior Nap Engineer';

  return (
    <div className="App">
      <h1>Functional Demo</h1>
      <Card
        img={img}
        name={name}
        title={title}
      />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
// const Navbar = require('./Components/Navbar').default;

// const express = require('express');
const catPic = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700"

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Card/>
      <Card/>
      <Card name="Mr Meows" img={catPic}/>

    </div>
  );
}

export default App;

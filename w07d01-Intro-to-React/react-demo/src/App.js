import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//const Navbar =  require('./components/Navbar')
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([
    {
      img: 'https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Anne',
      title: "HR"
    },
    {
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg',
      name: "worry Doggo",
      title: "HR"
    }
  ])
  console.log("APP IS RENDERING!@!!")
  // event listeners
  // jquery
  // i have to find it using jquery (DOM)
  // add a callback event listener
  // write callback
////////////////////////// react event listeners
  // array destruct
  const [number, setNumber] = useState(0); // [val, f]
  //  f = (val) => {
  //   number = val;
  //   reRenderTheEntireComponent();
  // }
  // returns us 2 values in an array []
  // first val  ==> is your variable 
  // second val ==> is the function to ALTER/CHANGE your variable
  const btnClick = () => {
    console.log("the button has been clicked!");
    setNumber(number + 1)
    console.log(number);
    setUsers(prev => [...prev, {img: '', name: '', title: ''}])
  }

  // const arr = [<h1>hello world</h1>, <h2>this is h2</h2>, <p>whoa!!</p>]
  // const cardHTML = [];
  // for (const user of users) {
  //   cardHTML.push(<Card image={user.img} name={user.name} title={user.title}/>)
  // }
  // forEach, map, filter, reduce, find
  const cardHTML = users.map( user => {
    return <Card image={user.img} name={user.name} title={user.title}/>
  })

  return (
    <div>
      <Navbar/>
      {cardHTML}
      <h1>{number}</h1>
      <button onClick={btnClick} id="btn" className='btn'>OUR AWESOME BUTTON!</button>
    </div>
  );
}

export default App;

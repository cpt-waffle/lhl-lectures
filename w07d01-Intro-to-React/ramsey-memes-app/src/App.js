import React from 'react';
import logo from './logo.svg';
import './App.css';

import Meme from './components/Meme';

function App() {

  let greetings = <h1>hello fworld</h1>
  let array = [ <Meme/>, <Meme/>, <Meme/>]
  let objArray = [{url: 'https://i.imgflip.com/3jmkn7.jpg', title:'ramsey 1'}, {url: 'https://runt-of-the-web.com/wordpress/wp-content/uploads/2013/04/gordon-ramsay-memes.jpg', title: 'ramsey 2'}]
  
  //// Method 1 -- you will not be using this but helps to visualize
  // const memesArray = [];
  // for (let item of objArray) {
  //   memesArray.push(<Meme img={item.url} title={item.title}/>)
  // }
  // map() ---> takes in an array, and returns you back a modified array
  // const memesArray = objArray.map(item => {
  //   return <Meme img={item.url} title={item.title}/>
  // })

  return (
    <div className="App">

      {greetings}
      {objArray.map(item => {
        return <Meme img={item.url} title={item.title}/>
      })}
    </div>
  );
}

export default App;

{/* <Meme/>
<Meme title="our cool ramsey meme" img={'https://i.imgflip.com/3jmkn7.jpg'}/> */}
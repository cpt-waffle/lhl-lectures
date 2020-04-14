import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemeList from './Components/MemeList';
import Form from './Components/Form';


// some sort of mock data that i got from a cool api (more on that tomorrow!!)
const memeList = [
  {name: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {name: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {name: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {name: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
];

// intervews = {
//   1: {
//     interviewer: 1,
//     student: 'Dasha',
//     timeSlot:"12pm"
//   }
//   2: {
//     interviewer: 1,
//     student: 'Dasha',
//     timeSlot:"12pm"
//   }
//   3: {
//     interviewer: 4
//   }
//   4: {
//     interviewer: 1,
//     student: 'Dasha',
//     timeSlot:"12pm"
//   }
// }
// {...intervews, 3: {interview: 4}}


function App() {
  const number = 1;
  const [memes, handleMemes] = useState([...memeList]);

  // Props always go down the tree
  // propagations run up 
  function addFreshMeme(n, u) {
      // alert('do i even work!?!?');
      const copy = [...memes, {name: n, url: u}];
      // TODO make an edit form 
      copy[0] = {...copy[0], url: u};
      handleMemes(copy);
  }

  return (
    <div className="App">
      <Form add={addFreshMeme}/>
      <MemeList list={memes} i={number}/>
    </div>
  );
}

export default App;

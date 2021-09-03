import React, {useState, useEffect} from 'react';
import Color from './components/Color'


function App() {
  // A Component that we pass an array of colors to 
  // IT will set a the first color 
  // and then if you click the "next" button it will change color to the next color
  // and if you click "previous" button it will change back to the previous color


  return (
    <div className="App">
      <h1>Hello ! 11</h1>
      <Color/>
    </div>
  );
}

export default App;
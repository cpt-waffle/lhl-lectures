import React, {useState, useEffect} from 'react';
import Color from './components/Color';

function App() {
  const [num, setNum] = useState(0);

// We need make a component called "Color"
// The color component will have a div 
// and 2 buttons within this div
// The color Component will take in as props an array of colors
// you should be able to switch between the colors by using the two buttons (next and previous color)

  return (
    <div className="App">
      <Color colors={['red', 'blue', 'pink', 'firebrick', 'lime', 'hotpick', 'salmon', 'rebeccapurple']}/>
    </div>
  );
}

export default App;
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';


function App() {

  const [num, setNum] = useState(0);

  const incrementNum = () => {
    setNum(num + 1);
    // setNum = (val) => {
      // if (val != num)
      // num = val
      // reRenderTheEntireComponentAndCheckVirtualDom();
    // }
  }

  // addUrl(generateHash(), 'www.google.ca');

  return (
    <div className="App">
      <Navbar num={num}/>
      <Card name={"Billy"} coconut={incrementNum}/>
      {/* {Card({name: "Billy", num: num})} */}

    <h2>{num}</h2>
    </div>
  );
}

export default App;

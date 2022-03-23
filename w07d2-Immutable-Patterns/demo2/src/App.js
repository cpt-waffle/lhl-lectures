import './App.css';
import { useState } from 'react';



function App() {

  const [items, setItems] = useState({
    milk: 1,
    cookies: 2,
    juice: 1,
    eggs: 10,
  });

  const keys = Object.keys(items);
  // const keysArr = [];

  // for (let item of keys) {
  //   keysArr.push(<li>{item}</li>)
  // }
  const onItemClick = (keyName) => {
    console.log("something has been clicked", keyName);
    const itemsCopy = {...items, [keyName]: items[keyName] + 1};
  }

  const keysArr = keys.map( item => <li>{item} <button onClick={() => onItemClick(item)}>{items[item]}</button></li>)



  return (
    <div className="App">
      <h3>Items</h3>
      <ul>
      {keysArr}
      </ul>
    </div>
  );
}

export default App;

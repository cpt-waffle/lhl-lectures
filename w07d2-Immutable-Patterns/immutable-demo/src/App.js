import React, {useState} from 'react';
import NumberDisplay from './components/NumberDisplay'
import './App.css';

function App() {
  // it sets the value of the first param AND TELLS REACT TO RE-RENDER STUFF!!!!!
  // setNum = (arg) => num = arg;
  const [num, setNum] = useState(0);
  const [todos, setTodos] = useState(['make oatmeal']);

  const countUp = () => {
    console.log("Hello world!");
    setNum(num + 1);
  }
  const todoRender = [];
  for (let item of todos) {
    todoRender.push(<li> --{item}--</li>)
  }

  const addRandomItem = () => {
    // add what is oatmeal? to the array


    // THE RIGHT WAY
    console.log('test!')
    // todos.push('what is oatmeal?');
    console.log(todos);
    setTodos([...todos, 'what is oatmeal?']);
    // look through the todos array and check if the array that is currently set
    // is different from the one that is being passed... if its different.. SET IT TO ORIGINAL
  }

  // ['one','two','three','four']

  // five, six seven
  // array.push('five') <-- it fails, and we need to use the immutability pattern for it
  // COPY the contents of the array and set to original.
  // const newArray = [...array, 'five']
  // for (item of array) newArray.push(item)
  // newArray.push('five');


  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={countUp}>Add 1</button>
      <button onClick={addRandomItem}>ADD ITEM</button>
      <ul>
        {todoRender}
      </ul>

      <NumberDisplay/>
    </div> 
  );
}

export default App;

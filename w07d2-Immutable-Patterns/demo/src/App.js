import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import { useState } from 'react';

// RENDER CYCLE
function App() {
  // [a,b]
  // a ---> the state value
  // b ---> the state function to change the value
  //                                         |
  //                                     and re-render the component
  // STATE
  const [num, setNum] = useState(4);
  const [items, setItems] = useState([
    {task: 'Shovel the snow!'},
    {task: 'Do the dishes'},
    {task: 'do react d3 work'},
    {task: 'walk the dog'},
  ]);

  let obj = {a:1, b:2, c:3}
  let objCopy = {...obj, d:4};

  let number = 0;
  const onBtnClick = () => {
    // your setState() takes in a value
    // it can ALSO TAKE A CALLBACK!
    // batching -- previous value of the state, batched up together
    setNum((prev) => {
      return prev + 1;
    });
  }
  const onReset = () => {
    setNum(0);
  }
  // <li>Buy Milk <button>Finished?</button></li>,
    // const arr = [];
    // for (let item of items) {
    //   arr.push(<li>{item.task}<button>Finished?</button></li>)
    // }

    const arrMap = items.map((item) => {
      // Item({task: item.task})
      // return Item({task: item.task})
      return <Item task={item.task} a={1} b={2}/>
    })

    const onTaskClick = () => {
      // the WRONG way
      // items.push({task: 'work out!'});
      // react determines when to re-render
      // by checking the prev value and current value
      // if values are the same, DONT re-render

      //  items --------------------------> 65747 [, , , , , {}]
      //  line 46: items.push()
      //  line 54: setItem() prev 65747   curr 65747
      //  NO RE-RENDER

      // VIRTUAL DOM 

      // {
      //    h15423sf5324: {
              // value: "Todo List :)"
              // children: 
              // ...
          // }

          // li34525432: {
              // value: itemState[0] 
          // }
          
      // }
      // make a carbon copy of our state, then alter it,
      // THEN set it to the original
////////////////////////////////////////////////////////////////////////
      const newTask = {task: 'work out!'};
      // for (let item of items) {
      //   itemsCopy.push({...item});
      // }
      // itemsCopy.push(newTask);
      const itemsCopy = [...items, newTask];


      // setItems(prev => {
        // return [...prev, newTask]
      // })
      setItems(itemsCopy);
      console.log(items);
    }

    console.log(arrMap)

  return (
    <div className="App">
      <h1>Todo List :)</h1>
      {arrMap}
      <button onClick={onTaskClick}>ADD A NEW TASK</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 


// whats state in react?
// how is it different from a let/const ?
function App() {
  let number = 0;
  // react useState -- needs to return 2 things
  //  first element of the array represents the VALUE of the state
  //  second element of the array represents the FUNCTION to CHANGE THAT VALUE
  const [num, changeNum] = useState(22);
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([
    {id: 1, task: ' have a meeting '},
    {id: 2, task: ' check on finals'},
    {id: 3, task: ' go to physio'},
    {id: 4, task: ' make a sandwitch'}
  ])
  //  ^ DO NOT EVER CHANGE STATE DIRECTLY
  //  num = ?? X WRONG
  console.log("re-render!");

  // $('#btn').on('click', () => {
    //...
  // })
  // Re-render --- can occur when a state changes
  // when you change a variable, the re-render of the component does not occur

  const onButtonClick = () => {
    console.log("yay!!");
    // when we use a state changing function,
    // react does the change, but also attempts to re-render the component
    // if the value was changed, the re-render will occur
    // changeNum(num + 1); //  22 + 1 = 23
    //           ^--- Immutability 
    // Batching...
    //         prev -- previous state
    // changeNum((prev) => {
    //   return prev + 1;
    // });
    //        ^-- values, an array and number, etc
    //        ^-- it can take a callback...
    const task = {task: 'make sure to do immutable patterns!'};
    // spread operator...
    // ...
    //  ^--- copy (shallow copy) the contents of _____
    //  [1,2,3,4,5]
    // const tasksCopy = [ task, ...tasks];
    // for (let item of tasks) {
    //   tasksCopy.push(item);
    // }
    // tasksCopy.push(task)

    setTasks(prev => {
      return [...prev, task]
    });


  }

  const array = [<h1>Hello world</h1>, <h2>Test</h2>, <p>this is a p tag</p>];
  const obj = {a: 1}
  // Virtual DOM
  // {
    // h1__1: {typeof$$: symbol.react, value: 'React W7D3 - Immutable State' type: 'h1 }
    // h1__2: {typeof$$: symbol.react, value: 'React W7D3 - Immutable State' type: 'h1 }
    // h2__3: {.......  value: {
      //  h1: { }
    // } }
    // ??: {a: 1}
    // li_1_34252: {3}
    // li_2_34253: {1}
    // li_3_34354: {2}
  // }
  
  // try not to use this way, its not the way we like to use it in react...
  const tasksHTML = [];

  for (let item of tasks) {
    tasksHTML.push(<li>{item.task}</li>)
  }
  //////////////////////////////////////////////////////////

  const tasksHTML2 = tasks.map(item => <li key={item.id}>{item.task}</li>)

  const onFormSubmit = evt => {
    console.log("on form submit!");
    evt.preventDefault();
    setTasks(prev => [...prev, {task: inputTask}])
  }


  return (
    <div className="App">
      <h1>React W7D3 - Immutable State Patterns</h1>
      {/*EJS <= number %>  ObjectObject*/}
      <h2>Number {num}</h2>
      {tasksHTML2}
      <form onSubmit={onFormSubmit}>
        <input type='text' name='newtask' value={inputTask} onChange={(evt) => setInputTask(evt.target.value)}/>
        <button>Add Task</button>
      </form>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
}

export default App;

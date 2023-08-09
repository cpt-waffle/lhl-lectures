import './App.css';
import {useState} from 'react';
import Task from './components/Task';
import TaskList from './components/TaskList';

let id = 5;

function App() {
  const [num, setNum] = useState(0);
  const [mtasks, setMTasks] = useState([
    {id: 1, task: ' have a meeting '}, // 0
    {id: 2, task: ' check on finals'}, // 1
    {id: 3, task: ' go to physio'},    // 2
    {id: 4, task: ' make a sandwitch'} // 3
  ]);

  // for loops simply loops through the array

// maps  loop through the array and return a new array
// whatever the map returns in the callback will be pushed into
// the brand new array (arr.push())

// .forEach((elem, index, arr,))

// Photo
// PhotoList

// 0:  1: 2: 3: 

  // VIRTUAL DOM
  //  [] ---> 

  //  {
        // 1: {}
        // 2: {}
        // 3: {}
  // }



  const addOne = () => {
    // setNum(val) => {
      // if (num != val) { ... stateChanging, reRendering }
    // }
    setNum(num+1);
  }

  const addSwimmingTask = () => {
    console.log("adding swimming....");
    const swimmingTask = {id: id, task: 'swimming'};
    id++;

    // WRONG WAY ....
    ////DO NOT DO THIS ---> // mtasks.push(swimmingTask);


    // mtasks: f394285
    // setMTasks(mtasks) 
    // whats the address of the current state? 
    // f394285
    // whats the address of the value were passing into the setState function?
    // f394285
    // if both address match, that means its the same object/array
    // im not re-rendering :(

    // CORRECT WAY ------>     
    // make a BRAND NEW COPY of a state  // { return tasks }
    // const mTasksCopy = [...mtasks];
    // const mTasksCopy = mtasks.map(tasks => tasks);
    // for (let task of mtasks) {
    //   mTasksCopy.push(task);
    // }
    // we alter that BRAND NEW COPY
    // and then we SET THE COPY to THE ORIGINAL
    setMTasks(prev => {
      const mTasksCopy = [...prev];
      mTasksCopy.push(swimmingTask);
      return mTasksCopy;
    });
  }

  return (
    // {}  ---> <%= %>,  <% %>
    <div className="App">
      <h1>W7D4 - Immutable Update Patterns!</h1>
      <h1>{num}</h1>
      <button onClick={addOne}>Click Me</button>
      <TaskList tasks={mtasks}/>
      <button onClick={addSwimmingTask}>Add Swimming Task</button>
    </div>
  );
}

export default App;

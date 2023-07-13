import './App.css';
import TasksList from './components/TasksList';
import Task from './components/Task';
import { useState } from 'react';

const mocktasks = [
  {id: 1, task: ' have a meeting '},
  {id: 2, task: ' check on finals'},
  {id: 3, task: ' go to physio'},
  {id: 4, task: ' make a sandwitch'}
];

let i = 5;

function App() {

  // NEVER CHANGE STATE DIRECTLY
  // [num, setNum]  X WRONG -> num++
  const [tasks, setTasks] = useState(mocktasks);

  // const photos = new array(3)

  const onAddTaskClick = () => {
    const newTask = {id: i, task: ' new task!!!'};
    i++;
    // immutable patterns
    // every time, you want to ALTER something, 
    // you have to make a copy of the first thing, CHANGE it, and set that to the original
    // NEVER ALTER STATE DIRECTLY ---> tasks.push(newTask);   BAAAD :(

    // spread operator.
    //shallow copying
    // const tasksCopy = [...tasks, newTask];

    // const tasksCopy = tasks.map(task => {
    //   return task
    // });
    // for (let task of tasks) {
    //   tasksCopy.push(task);
    // }

    // tasksCopy.push(newTask)


    setTasks(prev => {
      console.log("prev", prev);
      return [...prev, newTask]
    });
    // setTasks() ---> react goes to check on the state
    // ---> previousState        ----> newState
    // if (previousState !== newState) re-render()
    // react keeps states by reference

    // tasks ===> [1,2,3,4,5] 34567

    console.log(tasks);

    // alert("YES WE CLICKED IT!");
  }

  // const tasksArray = [];

  // for (let task of mocktasks) {
  //   tasksArray.push(<Task banana={task.task}/>);
  // }



  //a map() function is a for loop that always returns an array
  // if you are mapping through an array of 5 elements it will return an array of 5 elements


  return (
    <div className="App">
      <h1>W7D4 - Immutable Update Patterns!</h1>
      <TasksList tasks={tasks}/>
      <button onClick={onAddTaskClick}>Add A Task</button>
    </div>
  );
}

export default App;

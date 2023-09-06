import './App.css';
import { useState } from 'react';
import Task from './components/Task';
import TaskList from './components/TaskList';

let x = 5;

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, task: ' have a meeting '}, // 0
    {id: 2, task: ' check on finals'}, // 1
    {id: 3, task: ' go to physio'},    // 2
    {id: 4, task: ' make a sandwitch'} // 3
  ]);

  // const tasksCopy = [...tasks];
  // tasksCopy[0] = {... tasksCopy[0], task: 'eat some food'}
  

  // for (let taskObj of tasks) {
  //   tasksHTML.push(<Task name={taskObj.task}/>);
  // }

  const tasksHTML = tasks.map(taskObj => <Task key={taskObj.id} name={taskObj.task}/>)


  const addSwimming = () => {
    const newTask = {id: x, task: 'Swimming'};
    // immutability
    // make a copy
    const tasksCopy = [...tasks];
    // change the copy
    tasksCopy.push(newTask);
    // set the copy to the original
    setTasks(tasksCopy);
    x++;
    // DO NOT CHANGE THE ORIGINAL DIRECTLY!!!!!

  }



  return (

    <div className="App">
      <h1>W7D4 - Immutable Update Patterns!</h1>
      <TaskList tasks={tasks}/>
      <button onClick={addSwimming}>Add Swimming!!!</button>
    </div>
  );
}

export default App;

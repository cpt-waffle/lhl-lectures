import './App.css';
import TaskList from './Components/TaskList';
import {useState} from 'react';

  let id = 5;

function App() {

  const mockTask = {id: 1, name: "wash the dishes"};

  const [tasks, setTasks] = useState([
    {id: 1, name: ' have a meeting '}, // 0
    {id: 2, name: ' check on finals'}, // 1
    {id: 3, name: ' go to physio'},    // 2
    {id: 4, name: ' make a sandwitch'} // 3
  ]); // reference passed 


  const onSwimButton = () => {
    const newTask = {id: id, name: 'go swimming'};
    // IMMUTABILITY
    // const tasksCopy = [];
    // for (const task of tasks) {
    //   tasksCopy.push(task);
    // }
    // const tasksCopy = [...tasks, newTask];
    // VIRTUAL DOM = {

    // }

    
    // never change a value directly
    // always make a copy and change the copy
    setTasks(prev => {
      return [...prev, newTask]
    }); // setState for new task

    // the memory address/reference, access the array, and 1 more value
    // setTasks = (val=tasks) => {
    //   if (val !== tasks) {
    //     changeState(val)
    //   }
    // }


    console.log(tasks);
    id++;
  }

  return (

    <div className="App">
      <h1>W7D4 - Immutable Update Patterns!</h1>
      <TaskList tasks={tasks}/>
      <button onClick={onSwimButton}>Go Swimming</button>
    </div>
  );
}

export default App;

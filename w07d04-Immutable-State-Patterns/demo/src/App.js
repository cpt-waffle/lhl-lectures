import './App.css';
import Task from './components/Task';
import {useState} from 'react';
import TaskList from './components/TaskList';

// mock data
const mocktasks = [
  {id: 1, task: ' have a meeting '},
  {id: 2, task: ' check on finals'},
  {id: 3, task: ' go to physio'},
  {id: 4, task: ' make a sandwitch'}
];

let i = 5;

function App() {
  const [tasks, setTasks] = useState(mocktasks); 
  // const tasksComponents = []
  // for (let task of tasks) {
  //   tasksComponents.push(<Task/>)
  // }
  const tasksComponents = tasks.map(task => {
    return <Task key={task.id} name={task.task}/>
    // Task({})
  })

  const addTask = (evt) => {
    console.log("add task");
    evt.preventDefault();
    console.log(evt.target.newTask.value);
    const newTask = {id: i, task: evt.target.newTask.value};
    i++;
    const tasksCopy = [...tasks, newTask]
    setTasks(prev => {
      return [...prev, newTask];
    });

    newTask.id++
    i++;
    setTasks(prev => {
      return [...prev, newTask];
    });

    // tasks.push(newTask);
    // state --> tasks ---> 0x20435v
    // state --> tasks ---> 0x20435v
    // always PASS a new instance of an object/array
    // NEVER CHANGE the ORIGINAL value of anything
    // ALWAYS make a new copy change that copy and set it to the original!
    //// not the most correct way to make a copy of the state...
    /// coming up next time we will refactor this!
    /////////////////////////////////
    // const tasksCopy = [];
    // for (let task of tasks) {
    //   tasksCopy.push(task);
    // }

    // tasksCopy.push(newTask);
    /////////////////////////////////
    // forEach 
    // the spread operator
    //...
  }


  return (
    <div className="App">
      <h1>W7D4 - Immutable Update Patterns!</h1>
      {tasksComponents}
      <TaskList tasks={tasks}/>
      <form onSubmit={addTask}>
        <input type="text" name="newTask" />
        <button>Add a task</button>
      </form>
    </div>
  );
}

export default App;

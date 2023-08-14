import './App.css';
import NavBar from './Components/NavBar';
import TaskList from './Components/TaskList';
import Form from './Components/Form';
import useApp from './hooks/useApp';

// const mockTasks = [
//   {id: 1, taskName: 'Wash the dishes', completed: false},
//   {id: 2, taskName: 'vaccum', completed: false},
//   {id: 3, taskName: 'throw the garbage', completed: false},
//   {id: 4, taskName: 'feed the cat', completed: false},
// ]

function App() {
  const {tasks, addTask} = useApp();

  return (
    <div className="App">
      <NavBar/>
      <TaskList tasks={tasks}/>
      <Form addTask={addTask}/>
      {/* {Task({name: 'start painting ---'})} */}


      {/* Task({name: ''}) */}

    </div>
  );
}

export default App;

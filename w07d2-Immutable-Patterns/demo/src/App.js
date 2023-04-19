import './App.css';
import FancyButton from './components/FancyButton';
import { useState } from 'react';

// whats state in react?
// how is it different from a let/const ?

let id = 5;
function App() {
  console.log("LINE 7, we are running App();");
  let num = 0;
  // first element of this array, is your STATE VALUE
  // second element is the function to CHANGE that state
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [newTask, setNewTask] = useState('');

  const [tasks, setTasks] = useState([
    {id: 1, task: ' have a meeting '},
    {id: 2, task: ' check on finals'},
    {id: 3, task: ' go to physio'},
    {id: 4, task: ' make a sandwitch'}
  ])

  // const [state, setState] = useState({ number: 1, number2: 2})
  // const number = whatAreYou[0];
  // const setNumber = whatAreYou[1];

  // State is a variable
  // whenever state changes, the app will re-render ( in a nice, performant way...)

  // $(() => {
    // $('#btn').on('click', () => {
    //....
    // num++;
    // })

  // })

// Rendering cycle
// state
// VirtualDOM
  // 2 or 12
  const onClick = () => {
    console.log("something has been clicked!");
    // batching 
    setNumber(prev => {
      return prev + 1;
    }); // async
    setNumber(prev => {
      return prev + 1;
    });
    setNumber(prev => {
      return prev + 1;
    });
    setNumber(prev => {
      return prev + 1;
    });
    setNumber(prev => {
      return prev + 1;
    });
    setNumber(prev => {
      return prev + 1;
    });

    //1) changes the state
    //2) tells the component you are in to re-render
  }

  const onClick2 = () => {
    setNumber2(number2 + 2);
  }

  const a = <h1>hello world</h1>;
  console.log(a);

  // VirtualDOM
  //  {
        // ...
        // h2-1: {type: 'h2', children: {text: 'Number', number: 2}}
        // li-0:  {type: 'li', children: {text: 'Number', number: 2}}
        // li-1: {type: 'li', children: {text: 'Number', number: 2}}
        // li-2: {type: 'li', children: {text: 'Number', number: 2}}


        // ...
  // }

  // tasks.map( (task) => {
    // return <li>task</li>
  // })

  // const tasksHTMLArray = [];
  // for (let task of tasks) {
    // tasksHTMLArray.push(<li>{task}</li>)
  // }


  const onTaskSubmission = evt => {
    evt.preventDefault();
    console.log(newTask); // we need to add to task state
    // tasks.push({id: 6, task: newTask});
    // ... <--- SHALLOW COPY
    // setTasks([ ...tasks, {id: id, task: newTask}]);
    setTasks(prev => {
      return [...prev, {id: id, task: newTask}]
    })
    id++;
  }


  return (
    <div className="App">
      <h1>React W7D3 - Immutable State Patterns</h1>
      <h2>Number { number }</h2>
      <button onClick={onClick} id="btn">Click me</button>
      <h2>Number2 { number2 }</h2>
      <button onClick={() => setNumber2(number2 + 2)} id="btn">Click me for2</button>

      <ul>
        {tasks.map(task => <li key={task.id}>{task.task}</li>)}
      </ul>

      <form onSubmit={onTaskSubmission}>
        <input type="text" name="new_task" value={newTask} onChange={(evt) => setNewTask(evt.target.value)}/>
        <button>Add Task</button>
      </form>



    </div>
  );
}

export default App;

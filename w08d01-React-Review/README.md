## React Review

Today we'll be covering everything we did last week, as a big quick review, while answering any questions.


We'll be using this server (make sure to get the right depedancies)

`npm i express cors uniqid morgan`

```js
// Server API
const PORT = 8080;
const app = require('express')();   // npm i express
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(morgan('dev'));
app.use(cors());


const data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
];


app.get("/todos", (req, res) => {
    res.json(data);
})

app.post("/todos/:id/delete", (req, res) => {

})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

Leaving the server for now, we'll first create our react app with `cra`

`npx create-react-app client`

### Building Components 

A component should:

 - have react import (optional for new react ver)
 - have a function that gets exported  ( default or otherwise )
 - function returns JSX to be rendered


```jsx
//ToDoItem
import React from 'react'


const TodoItem = () => {
    return (<li>Buy Ketchup</li>)
}

export default TodoItem;
// ---
```

### Props

Props are properties, they are used to pass data from one component to another. Props not can pass primative types, but can also pass functions, objects, and arrays.

```jsx
//ToDoItem Refactored
import React from 'react'


const TodoItem = (props) => {
    return (<li>{props.task}</li>)
}

export default TodoItem;
// --
```

### hook - useState()

State determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

You can use state to store variables that will change and reflect that change in the UI

We'll first alter `App.js`

```jsx
function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      {JSON.stringify(items)}
    </div>
  );
}
```

and then we will add a `timeout` to simulate a change

```jsx
function App() {
  const [items, setItems] = useState([]);

  setTimeout(() => {
    setItems(['hello', 'world', 'welcome', 'to', 'state'])
  }, 4000)
  return (
    <div className="App">
      {JSON.stringify(items)}
    </div>
  );
}
```

### Hook - useEffect()

The useEffect Hook lets us make `side-effects` that can perform in your components: 
 - fetching data,
 - directly updating the DOM,
 - timers.


The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events.

In the next refactor, we will add a use-effect to get data from our `back-end` server and then render it on our page.

```jsx
// App js refactor
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/todos').then((res) => {
    setItems([...res.data])
  })
  }, [])

  return (
    <div className="App">
      {JSON.stringify(items)}
    </div>
  );
}
```

### Custom Hooks 

Custom hooks are a way to reuse state logic in other components. It makes testing state easier and also de-clutters up your components. 

We refactor our `App` by making a `useApplication` hook

like so:

```jsx
// makes your components look waaaay cleaner ( cause all logic/functions has been moved)
// You can actually TEST your states
import {useState, useEffect} from 'react';
import axios from 'axios';

let i = 323;

const useApplication = () => {
    const [list, setList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      axios.get('http://localhost:8080/todos').then(response => {
        setList([...response.data]);
      })
    }, []);
  
    const addItem = (task) => {
      console.log("LINE 17 from app.js!!");
      const newTask = {id: i++, task: task, done: false};
      axios.post('http://localhost:8080/todos', { newTask }).then(() => {
        setList(prev => [...prev, newTask]);
      }).catch(e => {
        setError("Error: Backend not responding :(");
      })
    }

  return {list, addItem, error};
}

export default useApplication;
```

And our our `App.js` will now look like this:


```jsx
import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Form from './components/Form'
import useApplication from './hooks/useApplication';

function App() {
  const {list, addItem, error} = useApplication();

  return (
    <div className="App">
      <h1>Hello REact!</h1>
      <ItemList list={list}/>
      <Form addItem={addItem}/>
      <h1>{error}</h1>
    </div>
  );
}

export default App;

```


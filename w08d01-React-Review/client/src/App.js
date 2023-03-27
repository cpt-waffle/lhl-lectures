import './App.css';
import TodoList from './components/TodoList';

import Form from './components/Form';
import useApp from './hooks/useApp';


function App() {
  const {todos, addItem} = useApp();


  return (
    <div className="App">
      <h1>Todo List!</h1>
      <TodoList list={todos}/>
      <Form addItem={addItem}/>
    </div>
  );
}

export default App;


//   Clothing Store app












// App.js
// [{id: 43, name: 'shirt'}]
// <ClothesList list={list}/>
// /items/:id  --------> {id: 43, name: shirt, descr, availSizes, colors: ....}


// <MoreInfo id={currentItem.id}/>

// useEffect(() =>  {...axios}, [props.id])
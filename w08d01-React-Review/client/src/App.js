import './App.css';
import React from 'react';
import Title, { SubTitle } from './components/Title';
import TaskList from './components/TaskList';
import Form from './components/Form';
import useApp from './hooks/useApp';


function App() {
  const {tasks, addTask} = useApp();

  return (
    <div className="App">
      <Title>Todo List -- :)</Title>
      <SubTitle/>
      {tasks.length ? <TaskList tasks={tasks}/> : <h2>Loading....</h2>}
      <Form addTask={addTask}/>
    </div>
  );
}

export default App;
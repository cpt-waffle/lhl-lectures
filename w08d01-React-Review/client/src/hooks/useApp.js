import { useState, useEffect } from 'react';
import axios from 'axios';

const useApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks').then(res => {
      console.log(res);
      setTasks(res.data);
    }).catch(e => {
      console.log("Error :(");
      console.log(e);
    })
  }, []) // <---- depedancy array


  const addTask = (name) => {
    console.log("name of task:", name);
    const fakeTask = {id: 5, taskName: name, completed: false};
    setTasks([...tasks, fakeTask]);
  }

  return {tasks, addTask};
}


export default useApp;
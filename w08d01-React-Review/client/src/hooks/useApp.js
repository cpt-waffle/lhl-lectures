import axios from 'axios';
import { useState, useEffect } from 'react';

const useApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks').then(res => {
        setTasks(res.data);
    }).catch(e => {

    })
    
  }, [])

  const addTask = (task) => {

    axios.post('/tasks', {title: task}).then(res => {
      setTasks(prev => {
        return [...prev, {...res.data}];
      })
    }).catch(e => {
      alert('error on backend :(');
    })
  }

  return {tasks, addTask};
}


export default useApp;

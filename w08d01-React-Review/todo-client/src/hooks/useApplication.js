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
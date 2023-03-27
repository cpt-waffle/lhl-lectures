import axios from 'axios';
import { useState, useEffect } from 'react';

const useApp = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios.get('/todos').then(res => {
      console.log(res);
      // data = res.data;
      setTodos(res.data);
    })

  }, [])

  const addItem = (item) => {
    console.log('add item, line 22: app.js', item);
    axios.post('/todos', {item}).then(res => {
      console.log("axios finished")
      console.log(res);
      setTodos(prev => [...prev, res.data]);
    })

  }

  return {todos, addItem}

}

export default useApp;
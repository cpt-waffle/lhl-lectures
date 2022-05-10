import { useState, useEffect } from "react";
import axios from 'axios';

const useApp = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/todos').then(resp => {
      console.log(resp);
      setList(resp.data);
    })
  }, [])

  const handleAddItem = (str) => {
    console.log('str =', str);
    const item = {
      id: undefined,
      task: str,
      done: false
    }
    axios.post('http://localhost:8080/todos', item).then(res => {
      console.log('response is ', res);
      setList(prev => {
        return [...prev, res.data]
      })
    }) 

  }

  return {list, handleAddItem}
}

export default useApp;
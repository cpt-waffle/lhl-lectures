import axios from 'axios';
import {useState, useEffect} from 'react';


const useApplication = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/todos').then(res => {
      console.log("REQUEST CAME BACK!!!!");
      console.log(res);
      setItems(res.data);
    })
  }, []) // dependancy Array

  const onFormSubmit = (input) => {
    console.log("line 17 app.js");
    console.log(input);
    // immutable patterns, 
    // make a copy of the array, and add 1 more item to the bottom of the array
    const newTask = {id: 0, task: input, done: false};
    axios.post('http://localhost:8080/todos', { newTask }).then((res) => {
      console.log("res", res);
      const newItems = [...items, res.data];
      setItems(newItems);
    })
  }

  return {items, onFormSubmit}

}

export default useApplication;
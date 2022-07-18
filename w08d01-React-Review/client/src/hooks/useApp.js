import { useState, useEffect } from "react";
import axios from 'axios';

const useApp = () => {
  // what is a state?!
  const [num, setNum] = useState(0);
  const [memes, setMemes] = useState([]);
  // how is it different from a regular const/let variable

  useEffect(() => {
    axios.get('/memes').then(res => {
      console.log("data has come back!!");
      console.log(res.data);
      setMemes(res.data);
    })
  }, [])
  // [5,1,2,3,4]
  //  DEPENDANCY ARRAY
  // whatever you put in that array, ( a variable, a state, etc)
  // if THAT variable CHANGES, the callback will run
  // if THAT variable doesnt change, the callback will not run...

  const onSubmit = (img, title) => {
    setMemes(prev => [{img, title}, ...prev]);
  }

  return {memes, onSubmit}
}

export default useApp;
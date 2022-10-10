import { useState, useEffect } from "react";
import axios from 'axios';

const useApplication = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('/memes').then(res => {
      console.log(res);
      setMemes(res.data);
    })

  }, [])

  const addMeme = (title, img) => {
    console.log("line 19, app.js");
    // axios.post('/memes/', {title, img}).then(data => {
      setMemes(prev => {
        return [{title, img}, ...prev]
      })
    // })
  }

  return {memes, addMeme};
}

export default useApplication;
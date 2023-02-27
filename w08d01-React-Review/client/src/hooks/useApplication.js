import { useState, useEffect } from "react";
import axios from 'axios';

const useApplication = () => {
  const [demoPosters, setDemoPosters] = useState([]);

  useEffect(() => {
    axios.get('/demoposters').then(res => {
      console.log(res);
      setDemoPosters(res.data);
    })
  }, [])

  const addPoster = (image, title, caption) => {
    console.log("app js line 19:", image, title, caption);
    // axios.post(/).then(res => {
      setDemoPosters(prev => {
        return [{image, title, caption},...prev];
      })
    // }).catch(e => {...})
  }
  return {demoPosters, addPoster}

}


export default useApplication;
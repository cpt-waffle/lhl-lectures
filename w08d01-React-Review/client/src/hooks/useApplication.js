import axios from 'axios';
import { useState, useEffect } from 'react';


let id = 4;

const useApplication = () => {
  const [posters, setPosters] = useState([]);


  // /api/photos
  // /api/topics
  // /api/topics/photos/:id
  useEffect(() => {
    axios.get('/posters').then(res => {
      console.log(res);
      setPosters([...res.data]);
    }).catch( e => {
      console.log("error -------------->", e)
    })
  }, [])


  const addPoster = (img, title, subtitle) => {
    setPosters(prev => [...prev, {id, img, title, subtitle}]);
    id++;
  }

  return { addPoster, posters};
}



export default useApplication;
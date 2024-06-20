import {useState, useEffect} from 'react';
import axios from 'axios';

const useApplication = () => {
  const [notes, setNotes] = useState([]);

  // dev env
  // use effects run twice
  // MOUNT --> UNMOUNT --> REMOUNT
  useEffect(() => {
    axios.get('/notes').then(res => {
      setNotes(res.data);
    })
    // web canvas

  }, [])// <-- dependancy array,


  const onFormSubmit = (newNote) => {
    console.log('this function runs in app.js on line 28');
    console.log(newNote);
    axios.post('/notes', {newNote}).then(res => {
      console.log('it worked', res.data);
      setNotes(prev => [...prev, res.data]);
    }).catch(e => {
      console.log('didnt work :(');
    })
  }

  return {notes, onFormSubmit}
}

export default useApplication;
import {useState, useEffect} from 'react';
import axios from 'axios';

const useApp = () => {
  const [array, setArray] = useState([]);
  const [num, setNumber] = useState(0);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    console.log('MOUNTING....')
    console.log("this use-effect runs ONCE And ONLY once on intial render");
    axios.get('/test').then(res => {
      console.log("AXIOS------------------");
      console.log(res);
      setArray(res.data);
    })
  }, [])
  
  useEffect(() => {
    axios.get('/posters').then(res => {
      console.log(res.data);
      setPosters(res.data);
    })
  }, [])
  
  const getTestData = () => {
    axios.get('/test').then(res => {
      console.log("AXIOS------------------");
      console.log(res);
      setArray(res.data);
    })
  }

  return {array, num, posters, getTestData, setNumber};
}



export default useApp;
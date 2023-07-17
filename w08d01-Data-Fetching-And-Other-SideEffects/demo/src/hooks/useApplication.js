import { useState, useEffect } from "react";
import axios from 'axios';


const useApplication = () => {
    // re-rendering..
    const [numbers, setNumbers] = useState([]);
    const [posters, setPosters] = useState([]);
  

    const incrementNumbersArray = () => {
      setNumbers(prev => [...prev, 99]);
    }

    // use-effect will run atleast once
    // and if any re-rendering happens it will run again.
    useEffect(() => {
    
      console.log("Im a use Effect!");
    });
  
    useEffect(() => {
      console.log("second useEffect");
      axios.get('/posters').then(res=> {
        console.log("data is back");
        console.log(res.data);
        setPosters(res.data);
      }).catch(e => {
        console.log("error ---- :(", e);
      })
    }, []); // <-- depedancy array
  
  
    useEffect(() => {
      console.log("NUMBERS STATE HAS CHANGED ---------------");
  
    }, [numbers])
  
    // componentDidMount
    // componentDidUpdate
  
    // App that displays information about maps
  
    // Toronto
    // Montreal
    // Vancouver
  
  
    // MapDetails(props)
    // useEffect(() => , [props.map_id])
  
  
    const onGetDataBtn = () => {
      console.log("attemting to get data...");
      // ajax
      //ajax.get('/')
      // fetch
      axios.get('/test').then(res => {
        console.log("data is back!");
        console.log(res);
        setNumbers(res.data);
      }).catch(e => {
        console.log("error :(", e);
      })
    }

  return {numbers, posters, onGetDataBtn}
}


export default useApplication;
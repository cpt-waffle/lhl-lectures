import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';

const DogsPage = (props) => {
    const [dogs, setDogs] = useState([]);


    useEffect(() => {
      axios.get('http://localhost:3002/dogs').then(result => {
        console.log("result");
        console.log(result);
        setDogs(result.data);
        // result.data is where i got the info
        // STATE ^^^
      }).catch(e => {
        console.log("!error!");
        console.log(e);
      })
    }, [])


    return (
        <div>
            <h1>Dogs</h1>
            {dogs.map(dog => <Card name={dog.name} image={dog.url} />)}
        </div>
    )
}


export default DogsPage;
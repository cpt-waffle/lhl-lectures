import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card'

const CatsPage = (props) => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/cats').then(result => {
          setCats(result.data);
          // result.data is where i got the info
          // STATE ^^^
        }).catch(e => {
          console.log("!error!");
          console.log(e);
        })
    }, [])


    return (<div>
        <h1>Cats Page!!</h1>
        {cats.map(cat => <Card name={cat.name} image={cat.img} />)}
    </div>)
}

export default CatsPage
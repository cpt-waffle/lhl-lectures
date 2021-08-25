import Card from '../../components/Card'

const DogHome = (props) => {
    const {dogs} = props;
    return (<div>
        <h1>Dogs :)</h1>
        {dogs.length < 0 ? <h1>Loading....</h1> : dogs.map((dog,i) => <Card key={i} img={dog.url} name={dog.name}/>)}
    </div>)
}

export default DogHome;
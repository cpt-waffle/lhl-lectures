import './DemotivationalPoster.css';
import NavBar from './NavBar';


// props or properties, is an object that passes data/parameters
// to the component when its called.
const DemotivationalPoster = (props) => {
  console.log(props);
  const img = "https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/19/1_4692108.jpg";


  return (
    <div className="poster">
      <img className="poster--img" src={props.img ? props.img : img}/>
      <h2>{props.title || 'no title :('}</h2>
      <p>{props.desc || 'no description :('}</p>
    </div>
  )
}

export default DemotivationalPoster;
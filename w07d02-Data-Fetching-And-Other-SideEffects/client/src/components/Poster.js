import './Poster.css';

const Poster = (props) => {

  return (<div className="poster">
    <img  className="poster--img" src={props.img}/>
    <h3>{props.name}</h3>
  </div>)
}

export default Poster;
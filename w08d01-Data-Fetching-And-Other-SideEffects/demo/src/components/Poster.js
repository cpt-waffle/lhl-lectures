
import './Poster.css';

const Poster = props => {
  return (
    <div className="poster">
      <img className="poster--img" src={props.url}/>
      <h3 className="poster--title">{props.name}</h3>
    </div>
  );
}

export default Poster;
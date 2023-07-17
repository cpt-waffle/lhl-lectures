import './Poster.css';

const Poster = props => {

  return (
  <article className="poster">
    <img 
      className="poster--img" 
      src={props.img}
    />
    <h1> { props.title }</h1>
  </article>)
}

export default Poster;
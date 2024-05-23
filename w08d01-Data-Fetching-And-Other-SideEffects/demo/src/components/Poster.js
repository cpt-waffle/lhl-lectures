import './Poster.css';

// what is the difference between
// a component
// and a function


// function(a,b,c)
// props is an object {}
const Poster = (props) => {
  return (
    <div className='poster'>
      <img 
        src={props.img}
        className="poster--img"
      />
      <h1>{props.title}</h1>
      <h5>{props.caption}</h5>
    </div>
  )
}


export default Poster;
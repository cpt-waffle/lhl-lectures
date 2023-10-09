import './Poster.css';

const Poster = props => {
  const defaultImg = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80";
  return (
    <div className="poster">
      <img
        className="poster--img"
        src={props.img ? props.img : defaultImg}
      />
      <h2>{props.title ? props.title : 'no title :('}</h2>
      <h5>{props.subtitle ?  props.subtitle : 'no subtitle :((('}</h5>
    </div>
  )
}

export default Poster;
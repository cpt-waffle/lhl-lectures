import Poster from "./Poster";

const PosterList = props => {
  
  return (
    <div>
      {props.posters.map(poster => <Poster key={poster.id} {...poster}/>)}
    </div>
  )
}

export default PosterList;
import Poster from "./Poster";

const PosterList = props => {
  return (<div>
    {props.posters.map( poster => <Poster key={poster.id} img={poster.url} title={poster.name}/>)}
  </div>)
}

export default PosterList;
import Poster from "./Poster";
import './PosterList.css';

const PosterList = props => {

  return (
    <div className="posters">
      {props.posters.map( poster => <Poster key={poster.id} img={poster.img} title={poster.title} subtitle={poster.subtitle}/>)}
    </div>

    // <Poster img={props.posters[0].img} title={props.posters[0].title} subtitle={props.posters[0].subtitle}/>
  )

}


export default PosterList;
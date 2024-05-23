import Poster from './Poster';

const PosterList = (props) => {
  const posters = props.posters;

  const arrayOfPostersComponentsUsingMap = posters.map(poster => {
    return <Poster 
      key={poster.id}
      img={poster.img}
      title={poster.title}
      caption={poster.caption}
      />
  })

  return <>{arrayOfPostersComponentsUsingMap}</>
}


export default PosterList;
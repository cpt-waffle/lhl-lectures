import Meme from "./Meme";

const MemeList = props => {
  return (<div>
    {props.list.map(meme => <Meme key={meme.id}title={meme.title} img={meme.img}/>)}
  </div>)
}

export default MemeList;
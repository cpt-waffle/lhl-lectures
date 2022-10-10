import Meme from "./Meme";

const MemeList = (props) => {
  const memes = props.list.map(meme => {
    return <Meme img={meme.img} title={meme.title}/>
  })

  return (<div>
    {memes}
  </div>)
}

export default MemeList;
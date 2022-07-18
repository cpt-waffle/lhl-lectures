import Meme from "../Meme";

// [ {title, img} ]
// const memesHTML = [];
// for (let meme of props.list) {
//   memesHTML.push(<Meme title={meme.title} img={meme.img}/>)
// }

// map, filter, reduce, forEach, .find

//virtual DOM???

const Memelist = props => {
  const memesHTML = props.list.map( meme => <Meme key={meme.id} title={meme.title} img={meme.img}/>)

  return (
    <div>
      {memesHTML}
    </div>
  )
}

export default Memelist;
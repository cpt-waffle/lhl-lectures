import React from 'react';
import Meme from './Meme';

const MemeList = (props) => {
  // props.list
  // const memes = [];

  // for (let meme of props.list) {
  //   memes.push(<Meme data={meme}/>)
  // }
  //////// Comparison

  const memesComponents = props.list.map(meme => {
    return <Meme data={meme}/>
  })

  return (
    <div>
      {memesComponents}
    </div>
  )

}

export default MemeList;
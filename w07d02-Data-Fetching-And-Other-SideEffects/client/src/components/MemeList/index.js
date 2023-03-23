import React from 'react';
import Meme from '../Meme';


const MemeList = props => {
  console.log(props);
  return (<div>
    {props.list.map(meme => <Meme img={meme.img} title={meme.title} func={props.banana}/>)}
  </div>)
}

export default MemeList;
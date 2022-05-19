import React from 'react';
import MemeMachine from './MemeMachine';

// {
//   div-123634 {
//     mememachine-123700-0: {}
//     mememachine-123700-2
//     mememachine-123700-1: {}

//   }
// }


const MemeMachineList = (props) => {
  const arr = props.memes.map( meme => <MemeMachine key={meme.id} title={meme.name} img={meme.url}/>)
  return (<div>
    {arr}
  </div>)
}


export default MemeMachineList;
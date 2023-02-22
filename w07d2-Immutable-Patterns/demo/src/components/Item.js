import React from 'react';

const Item = (props) => {
  return (
    <li>{props.task} <button>Finished?</button></li>
  )
}


export default Item;
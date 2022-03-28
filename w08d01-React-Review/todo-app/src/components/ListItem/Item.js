import React from 'react';

const Item = props => {
  
  return (
    <li>
      {props.task}
      {!props.done && <button>Complete?</button>}
    </li>
  )
}

export default Item;
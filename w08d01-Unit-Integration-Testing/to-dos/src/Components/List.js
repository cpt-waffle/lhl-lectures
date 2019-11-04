import React from 'react';
import Item from './Item'

export default (props) => {
  return (
    <ul className="todo-list">
      {props.items.map( (item, index ) =>
        <Item
          key={index}
          index={index}
          item={item.item}
          done={item.done}
          toggleDone={props.toggleDone}
        />
      )}
    </ul>
  );
}
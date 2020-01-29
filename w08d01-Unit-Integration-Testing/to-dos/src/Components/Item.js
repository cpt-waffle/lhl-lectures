import React from 'react';

export default (props) => {
  return (
    <li className="todo-item" key={props.index} >
      <p>{props && props.item && props.item.toLowerCase()}</p>
      <input
        className="checkbox"
        type="checkbox"
        name="done"
        value="done"
        checked={props.done}
        onChange={() => props.toggleDone(props.index)}
      />
    </li>
  );
}
import React from 'react';

export default (props) => {
  return (
    <li className="todo-item" key={props.index} >
      
      <p className="todo-title" data-testid="todo-name">{props.item}</p>
      <input
        id="check"
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
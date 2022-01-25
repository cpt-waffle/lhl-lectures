import React from 'react';

export default (props) => {
  return (
    <li className="todo-item" data-testid="item" key={props.index} >
      <p>{props.item.toLowerCase()}</p>
      <input
        id="check"
        data-testid="input"
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
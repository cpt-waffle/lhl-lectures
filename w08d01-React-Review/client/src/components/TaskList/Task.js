import React from 'react';
import './Task.css';


const Task = (props) => {

  return (
    <article className="task">
      <h1>{props.name}</h1>
      <button className='task--btn'>Done?</button>
    </article>
  )
}

export default Task;
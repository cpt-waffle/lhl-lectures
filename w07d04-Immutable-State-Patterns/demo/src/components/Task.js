import './Task.css';

const Task = props => {
  return (
    <li className='task'>
      {props.name}
    </li>
  )
}

export default Task;
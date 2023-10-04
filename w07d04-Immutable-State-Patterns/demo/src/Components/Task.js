import './Task.css';

const Task = props => {
  return (
    <li className="task">
      {props.title}
    </li>
  )
}

export default Task;
import './Task.css';

const Task = props => {
  console.log(props);

  return (
    <li className='task'>{props.name}</li>
  );
}

export default Task;
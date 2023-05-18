import './Task.css';

const Task = props => {
  return (
    <div className='task'>
      <h1>{props.name}</h1>
      <button>Done</button>
    </div>
  )
}

export default Task;
import './Task.css';

const Task = (props) => {
  console.log(props);
  return (
    <div className="task">
      {props.banana}
    </div>
  )
}


export default Task;
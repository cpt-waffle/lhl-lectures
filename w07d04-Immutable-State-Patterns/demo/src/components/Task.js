import './Task.css';

//  props --> just an object with all the things passed in
const Task = (props) => {
  return (
    <div className="task">
      <h5>{props.name}</h5>
    </div>

  );
}

export default Task;
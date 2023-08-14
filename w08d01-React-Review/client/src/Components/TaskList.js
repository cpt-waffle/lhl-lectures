import Task from "./Task";
import './TaskList.css';

const TaskList = props => {

  const tasksArray = props.tasks.map(task => {
    return <Task key={task.id} name={task.taskName}/>
  })

  return (
    <div className="task-list">
      {tasksArray}
    </div>
  );
}


export default TaskList;
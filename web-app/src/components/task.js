import './../App.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHourglassStart,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
const TaskItem = ({ task, handleDelete }) => {
  return (
    <div className="items">
      <FontAwesomeIcon
        icon={task.completed ? faCheck :faHourglassStart }
        className="task-icon"
       
      />
      <h4>{task.task}</h4>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="task-icon"
        onClick={() => handleDelete(task._id)}
      />
    </div>
  );
};

export default TaskItem;

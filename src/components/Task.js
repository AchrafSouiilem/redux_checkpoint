import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { completeTask, editTask} from "../redux/Actions/TaskActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.description);
  const handleEdit = (e) => {
    const editedTask = {
      id: task.id,
      description: editValue,
      isDone: false,
    };
    dispatch(editTask(editedTask));
    setIsEditing(false);
  };
  return (
    <div className={task.isDone ? " complete" : ""}>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input className="todo-input" type="test" placeholder="update the task" name="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
          <button className="todo-button">Update</button>
        </form>
      ) : (
        <div className="icons todo-row">
          <div onClick={() => dispatch(completeTask(task))}>{task.description}</div>
          <div>
            <i onClick={() => setIsEditing(true)} className="fa-solid fa-pen-to-square edit-icon"></i>
            <i className="fa-solid fa-trash delete-icon"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;

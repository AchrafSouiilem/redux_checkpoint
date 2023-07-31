import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "../redux/Actions/TaskActions";
import { filterSelector } from "../redux/selector";
import { Button } from '@mui/material';

const ListTask = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const visibility = useSelector(
    (state) => state.filterReducer.visibilityFilter
  );
  const dispatch = useDispatch();
  const filtredTasks = filterSelector(tasks, visibility)
  return (
    <div>
      <div className="todo-form">
        <Button onClick={() => dispatch(filterTask("All"))} variant="contained">All</Button>
        <Button onClick={() => dispatch(filterTask("Done"))} variant="contained">Done</Button>
        <Button onClick={() => dispatch(filterTask("NotDone"))} variant="contained">NotDone</Button>
      </div>
      {filtredTasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default ListTask;

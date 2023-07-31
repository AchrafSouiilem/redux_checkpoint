import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions/TaskActions";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask(task));
      setTask("");
    } 
    else {
      alert("please add a task");
    }
  };
  return (
    <form className="todo-form">
      <h1>What's the plan for today?</h1>
      <input className="todo-input" placeholder="Add a todo" name="text" type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button className="todo-button" onClick={submit}>Add Todo</button>
    </form>
  );
};

export default AddTask;

import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../Actions/ActionTypes";

const initalState = {
  tasks: [
    // { id: Math.random(), description: "", isDone: false },
    // { id: Math.random(), description: "", isDone: true },
  ],
};

export const taskReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      const newTask = {
        id: Math.random(),
        description: payload,
        isDone: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case COMPLETE_TASK:
      const toggleTask = state.tasks.map((task) =>
        task.id === payload.id ? { ...payload, isDone: !payload.isDone } : task
      );
      return { ...state, tasks: toggleTask };

    case EDIT_TASK:
      const editedTask = state.tasks.map((task) => {
        if (task.id === payload.id) {
          task.id = payload.id;
          task.description = payload.description;
          task.isDone = payload.isDone;
        }
        return task;
      });
      return { ...state, tasks: editedTask };
    default:
      return state;
  }
};

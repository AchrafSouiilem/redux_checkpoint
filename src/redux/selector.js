export const filterSelector = (tasks, visibility) => {
  switch (visibility) {
    case "Done":
      return tasks.filter(task => task.isDone);

    case "NotDone":
      return tasks.filter(task => !task.isDone);

    default:
      return tasks;
  }
};

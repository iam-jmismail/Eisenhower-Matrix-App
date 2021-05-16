export const addTask = (task) => {
  if (task) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    localStorage.setItem("tasks", JSON.stringify([task]));
    if (!storedTasks) {
    } else {
      const allTasks = [...storedTasks, task];
      localStorage.setItem("tasks", JSON.stringify(allTasks));
    }
  }
};

// export const getTasks = () => {
//   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
// };

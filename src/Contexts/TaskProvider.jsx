import { useState } from "react";
import { TaskContext } from "./TaskContext";
// eslint-disable-next-line react-refresh/only-export-components

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const dateTime = new Date().toISOString().split(".")[0].split("T");
    const id =
      dateTime[0].split("-").join("") + dateTime[1].split(":").join("");
    const date = new Date().toISOString().split("T")[0];
    const newTask = { id, title, isComplete: false, date };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteBtn = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  };
  const handleEditTask = (e, t) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === t.id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  const handleComplete = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.title === task.title
          ? { ...prevTask, isComplete: true }
          : prevTask,
      ),
    );
  };
  const handleUndo = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.title === task.title
          ? { ...prevTask, isComplete: false }
          : prevTask,
      ),
    );
  };

  const getCompletedTaskCount = () => {
    const completeDTask = tasks.filter((task) => task.isComplete === true);
    return completeDTask.length;
  };

  const handleTotalPendingTask = () => {
    const completeDTask = tasks.filter((task) => task.isComplete === false);
    return completeDTask.length;
  };
  const totalProgress = () => {
    return tasks.length === 0
      ? 0
      : Number(((getCompletedTaskCount() / tasks.length) * 100).toFixed(2));
  };
  const taskInfo = {
    tasks,
    handleUndo,
    addTask,
    handleDeleteBtn,
    handleEditTask,
    handleComplete,
    getCompletedTaskCount,
    handleTotalPendingTask,
    totalProgress,
  };

  return <TaskContext value={taskInfo}>{children}</TaskContext>;
};
export default TaskContextProvider;

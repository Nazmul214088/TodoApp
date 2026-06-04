import { useState } from "react";
import { TaskContext } from "./TaskContext";
// eslint-disable-next-line react-refresh/only-export-components

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn JavaScript Array Methods",
      isComplete: false,
      date: "2026-06-15",
    },
    {
      id: 2,
      title: "Complete React Project",
      isComplete: false,
      date: "2026-06-16",
    },
    {
      id: 3,
      title: "Study Redux",
      isComplete: false,
      date: "2026-06-17",
    },
    {
      id: 4,
      title: "Practice DSA Problems",
      isComplete: true,
      date: "2026-06-18",
    },
  ]);

  const addTask = (title) => {
    const id = tasks.length + 1;
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
    // tasks.map((t) => {
    //   if (t.title === task.title) {
    //     t.isComplete = true;
    //   }
    // });
    // setTasks([...tasks]);
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

  const handleTotalCompleteTask = () => {
    const completeDTask = tasks.filter((task) => task.isComplete === true);
    return completeDTask.length;
  };

  const handleTotalPendingTask = () => {
    const completeDTask = tasks.filter((task) => task.isComplete === false);
    return completeDTask.length;
  };
  const totalProgress = () => {
    return Number(
      ((handleTotalCompleteTask() / tasks.length) * 100).toFixed(2),
    );
  };
  const taskInfo = {
    tasks,
    handleUndo,
    addTask,
    handleDeleteBtn,
    handleEditTask,
    handleComplete,
    handleTotalCompleteTask,
    handleTotalPendingTask,
    totalProgress,
  };

  return <TaskContext value={taskInfo}>{children}</TaskContext>;
};
export default TaskContextProvider;

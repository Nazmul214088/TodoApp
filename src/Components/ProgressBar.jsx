import useTask from "../Hooks/useTask";
import Header from "./Header";

const ProgressBar = () => {
  const { tasks, getCompletedTaskCount } = useTask();
  const progressWidth =
    tasks.length === 0 ? 0 : (getCompletedTaskCount() / tasks.length) * 100;

  return (
    <div className="mt-10 py-6">
      <Header title="Task Completion Progress" />
      <div className="w-full h-3 bg-gray-500 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

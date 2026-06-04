import useTask from "../Hooks/useTask";
import ComponentHeader from "./ComponentHeader";

const ProgressBar = () => {
  const { tasks, handleTotalCompleteTask } = useTask();
  const progressWidth = (handleTotalCompleteTask() / tasks.length) * 100;

  return (
    <div className="mt-10 py-6">
      <ComponentHeader title="Task Completion Progress" />
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

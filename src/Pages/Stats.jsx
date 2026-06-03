import { useContext } from "react";
import { taskContext } from "../Contexts/TaskProvider";
import StatsCard from "../Components/StatsCard";

const Stats = () => {
  const {
    tasks,
    handleTotalCompleteTask,
    handleTotalPendingTask,
    totalProgress,
  } = useContext(taskContext);
  return (
    <div className="px-[10%] bg-[#20283970] min-h-[90vh] dark:bg-[#333]">
      <h1 className="text-6xl font-bold py-6 pt-20 text-center dark:text-white ">
        Task Summary
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 justify-center ">
        <StatsCard title="Total number of todos" total={tasks.length} />
        <StatsCard
          title="Total completed todos"
          total={handleTotalCompleteTask()}
        />
        <StatsCard
          title="Total pending todos"
          total={handleTotalPendingTask()}
        />
        <StatsCard
          title="Completion percentage"
          total={totalProgress()}
          percentage="%"
        />
      </div>
    </div>
  );
};

export default Stats;

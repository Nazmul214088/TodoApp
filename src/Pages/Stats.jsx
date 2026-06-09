import StatsCard from "../Components/StatsCard";
import ProgressBar from "../Components/ProgressBar";
import useTask from "../Hooks/useTask";
import TaskPieChart from "../Components/TaskPieChart";

const Stats = () => {
  const {
    tasks,
    getCompletedTaskCount,
    handleTotalPendingTask,
    totalProgress,
  } = useTask();
  const taskStatsData = [
    {
      title: "Total number of todos",
      total: tasks.length,
    },
    {
      title: "Total completed todos",
      total: getCompletedTaskCount(),
    },
    {
      title: "Total pending todos",
      total: handleTotalPendingTask(),
    },
    {
      title: "Completion percentage",
      total: totalProgress(),
      percentage: "%",
    },
  ];

  return (
    <div className="px-[2%] bg-[#d3dff970] dark:bg-[#333]">
      <h1 className="text-6xl font-bold py-6 pt-20 text-center dark:text-white ">
        Task Summary
      </h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 justify-center ">
        {taskStatsData.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            total={stat.total}
            percentage={stat.percentage}
          />
        ))}
      </div>

      <ProgressBar />
      <TaskPieChart taskStatsData={taskStatsData} />
    </div>
  );
};

export default Stats;

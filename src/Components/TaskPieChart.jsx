import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Header from "./Header";

const TaskPieChart = (taskStatsData) => {
  const taskData = taskStatsData.taskStatsData;

  const filterTaskData = taskData.filter(
    (data) =>
      !(
        data.title == "Total number of todos" ||
        data.title == "Completion percentage"
      ),
  );

  const data = filterTaskData.map((item) => ({
    name: item.title,
    value: item.total,
  }));
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <Header title="Task Completion Status" />
      <ResponsiveContainer width={"100%"} height={"400"}>
        <PieChart width={400} height={500}>
          <Pie data={data} outerRadius={150} cx="50%" cy="50%">
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend className="flex flex-col text-3xl" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskPieChart;

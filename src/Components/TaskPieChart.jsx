import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ComponentHeader from "./ComponentHeader";

const TaskPieChart = (taskStatsData) => {
  console.log(taskStatsData);
  const taskData = taskStatsData.taskStatsData;
  console.log(taskData);

  const data = taskData.map((item) => ({
    name: item.title,
    value: item.total,
  }));
  data.pop();
  data.shift();
  console.log(data);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <ComponentHeader title="Task Completion Status" />
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

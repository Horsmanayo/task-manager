//Legend: The legend provides information about the data represented in the chart. It explains what each color or pattern in the chart corresponds to.
//The tooltip provides additional information when the user hovers over a specific part of the chart (like a segment in a pie or doughnut chart).

// Import ArcElement is for doughnut/pie charts
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { mockData } from "../../../utils/mockData";

Chart.register(ArcElement, Tooltip, Legend);

function ProgressChart() {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [mockData.taskCompletionRate, 100 - mockData.taskCompletionRate],
        backgroundColor: ["#007bff", "#ffffff"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        bodyColor: "#ffffff",
      },
    },
  };

  return (
    <div className="bg-gray-900 p-2 rounded-lg shadow-md w-full max-w-[200px] mx-auto md:max-w-[300px] lg:max-w-[350px]">
      <h2 className="text-xl text-center font-semibold text-white">
        Task Completion Rate
      </h2>

      <div className="text-white m-1">
        {/* Make the chart responsive by setting height and width to 100% */}
        <div className="relative h-[100px] sm:h-[150px] md:h-[175px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="text-center">
        <span className="text-2xl font-bold text-blue-500">
          {mockData.taskCompletionRate}%
        </span>
        <p className="text-white text-sm mt-2">Completed</p>
      </div>
    </div>
  );
}

export default ProgressChart;

//Legend: The legend provides information about the data represented in the chart. It explains what each color or pattern in the chart corresponds to.
//The tooltip provides additional information when the user hovers over a specific part of the chart (like a segment in a pie or doughnut chart).

// Import ArcElement is for doughnut/pie charts
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// Import Doughnut chart component from react-chartjs-2
import { Doughnut } from "react-chartjs-2";
import { mockData } from "../../../utils/mockData";

// Register the necessary components from chart.js to enable Doughnut charts, tooltips, and legends
Chart.register(ArcElement, Tooltip, Legend);

function ProgressChart() {
  // Define data for the Doughnut chart
  const data = {
    // Labels for chart segments
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        // Data for the chart: task completion and remaining tasks, based on mockData
        data: [mockData.taskCompletionRate, 100 - mockData.taskCompletionRate],
        backgroundColor: ["#007bff", "#ffffff"],
      },
    ],
  };

  // Options to style the chart, including legend labels and tooltips
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // Set the color of the legend labels to white
        },
      },
      tooltip: {
        bodyColor: "#ffffff", // Set the color of tooltip text to white
      },
    },
  };

  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-md w-[250px]">
      {/* Title */}
      <h2 className="text-xl font-semibold text-white">Task Completion Rate</h2>

      {/* Doughnut chart container */}
      <div className="text-white m-2">
        {/* Render the Doughnut chart with data and an option to prevent resizing on different screen sizes */}
        <Doughnut data={data} options={options} />
      </div>

      {/* Displaying completion percentage next to the chart */}
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

import { mockData } from "../../../utils/mockData";
import ProgressChart from "./ProgressChart";
import SummaryCard from "./SummaryCard";

const Progress = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* ProgressChart container */}
      <div className="mb-8 md:mb-20 w-full md:w-[60%]">
        <ProgressChart />
      </div>
      
      {/* SummaryCard container */}
      <div className="w-full md:w-[350px]">
        <SummaryCard
          activeTasks={mockData.activeTasks}
          pendingTasks={mockData.pendingProjects}
          upcomingDeadlines={mockData.upcomingDeadlines}
        />
      </div>
    </div>
  );
};

export default Progress;

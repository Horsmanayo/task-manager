import { mockData } from "../../../utils/mockData";
import ProgressChart from "./ProgressChart";
import SummaryCard from "./SummaryCard";

const Progress = () => {
  return (
    <div className="flex gap-10">
      <div className="ml-20">
        <ProgressChart />
      </div>
      <div className="w-[350px]">
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

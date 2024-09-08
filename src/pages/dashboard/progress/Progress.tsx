import { mockData } from "../../../utils/mockData";
import ProgressChart from "./ProgressChart";
import SummaryCard from "./SummaryCard";

const Progress = () => {
  return (
    <div className="flex gap-6">
      <div className="">
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

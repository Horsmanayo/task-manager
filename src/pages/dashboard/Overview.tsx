/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Progress from "./progress/Progress";
import Tasks from "./tasks/Tasks";
import RightSide from "./rightSide/RightSide";

const Overview = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Left side - Progress and Tasks */}
      <div className="flex flex-col w-full lg:w-2/3 p-4">
        <Progress />
        <Tasks onTaskClick={handleTaskClick} />
      </div>
      
      {/* Right side - Calendar and Task Details */}
      <div className="w-full lg:w-1/3 p-4">
        <RightSide task={selectedTask} />
      </div>
    </div>
  );
};

export default Overview;
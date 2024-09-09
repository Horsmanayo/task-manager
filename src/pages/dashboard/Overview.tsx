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
    <div className="flex flex-col lg:flex-row m-4 lg:m-8">
  <div className="flex-[3] mb-4 lg:mb-0 lg:mr-8">
    <div className="mb-4">
      <Progress />
    </div>
    <div>
      <Tasks onTaskClick={handleTaskClick} />
    </div>
  </div>
  <div className="flex-[1] h-auto lg:h-[100vh]">
    <RightSide task={selectedTask} />
  </div>
</div>

  );
};

export default Overview;

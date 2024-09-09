/* eslint-disable @typescript-eslint/no-explicit-any */

// The state for the selected task should be managed at the parent component level, so that the TaskCard can notify the parent when it is clicked. The parent will then pass the selected task's details to a display section (RightSide component).

import { useState } from "react";
import Progress from "./progress/Progress";
import Tasks from "./tasks/Tasks";
import RightSide from "./rightSide/RightSide";


const Overview = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  // Handle task selection by updating the selected task.
  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
  };

  return (
    <div className="flex m-8">
      {/* Main content (Progress and Tasks) */}
      <div className="flex-grow mr-8">
        <div className="mb-20">
          <Progress />
        </div>
        <div>
          {/* The prop is used here */}
          <Tasks onTaskClick={handleTaskClick} />
        </div>
      </div>

      {/* Right side container */}
      <div className="w-1/3 h-[100vh]">
        <RightSide task={selectedTask} />
      </div>
    </div>
  );
};

export default Overview;

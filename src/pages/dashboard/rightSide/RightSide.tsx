/* eslint-disable @typescript-eslint/no-explicit-any */
import CalendarChart from "./CalendarChart";
import TaskDetail from "./TaskDetails";

const RightSide = ({ task }: { task: any }) => {
  return (
    <div className="p-4 shadow-md h-screen lg:h-[100vh] md:h-[100vh] bg-gray-50 flex flex-col">
      {/* CalendarChart */}
      <div className="border-4 p-4 mb-4 flex-grow h-[30vh]">
        <CalendarChart />
      </div>

      {/* Task Details */}
      <div className="bg-white p-4 flex-grow overflow-y-auto h-[50vh]">
        {task ? (
          <TaskDetail
            image={task.taskImage}
            taskName={task.taskName}
            progress={task.progress}
            deadline={task.deadline}
            description={task.description}
            steps={task.steps}
            instructorImage={task.instructorImage}
            instructorName={task.instructorName}
          />
        ) : (
          <div className="font-bold text-[20px] space-y-4">
            <h1>Select a task to view details</h1>
            <p>Get a preview of each task to prepare yourself for what comes your way!!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSide;

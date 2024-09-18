/* eslint-disable @typescript-eslint/no-explicit-any */
import TaskDetail from "./TaskDetails";

const RightSide = ({ task }: { task: any }) => {
  return (
    <div className="shadow-md h-[100vh]">
      {/* CalendarChart */}
      {/* <div className="border-4 p-2 mb-4 flex-grow">
        <CalendarChart />
      </div> */}

      {/* Task Details */}
      <div className="bg-white p-4 flex-grow overflow-y-auto">
        {task ? (
          <div className="w-full h-full">
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
          </div>
        ) : (
          <div className="font-bold text-[20px] space-y-4">
            <h1>Select a task to view details</h1>
            <p>
              Get a preview of each task to prepare yourself for what comes your
              way!!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSide;

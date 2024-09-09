/* eslint-disable @typescript-eslint/no-explicit-any */
import CalendarChart from "./CalendarChart";
import TaskDetail from "./TaskDetails";


const RightSide = ({ task }: { task: any }) => {
  return (
    <div className="p-4 shadow-md h-[100vh] bg-gray-50">
      <div className="flex-grow h-[30vh] ">
        {/* CalendarChart */}
        <div className=" border-4 p-10 mb-5 mr-5">
          <CalendarChart />
        </div>

        {/* Task Details which is rendered on condition */}
        <div className="bg-white flex-grow">
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
    </div>
  );
};

export default RightSide;

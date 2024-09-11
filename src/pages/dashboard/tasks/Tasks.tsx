/* eslint-disable @typescript-eslint/no-explicit-any */
import { tasks } from "../../../utils/tasks";
import TaskCard from "./TaskCard";

// onTaskClick prop is a function passed from the Overview to capture when a task is clicked.

const Tasks = ({ onTaskClick }: { onTaskClick: (task: any) => void }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          image={task.taskImage}
          taskName={task.taskName}
          progress={task.progress}
          deadline={task.deadline}
          onClick={() => onTaskClick(task)} 
        />
      ))}
    </div>
  );
};

export default Tasks;

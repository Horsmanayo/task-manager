import { tasks } from "../../../utils/tasks";
import TaskCard from "./TaskCard";

const Tasks = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskImage={task.image}
          taskName={task.taskName}
          progress={task.progress}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
};

export default Tasks;

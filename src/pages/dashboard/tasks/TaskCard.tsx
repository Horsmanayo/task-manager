import { FiClock } from "react-icons/fi";

interface TaskCardProps {
  image?: string;
  taskName?: string;
  progress?: number;
  deadline?: string;
  onClick?: () => void;
}

const TaskCard = ({
  image,
  taskName,
  progress,
  deadline,
  onClick,
}: TaskCardProps) => {

  return (
    // onClick function to select the task.
    <div onClick={onClick} className="p-4 border rounded-md shadow-sm bg-white h-auto space-y-6 w-[320px] cursor-pointer">
      {/* Image */}
      <img src={image} alt="Task Image" className="w-[300px] h-[30vh]" />

      <h3 className="text-lg font-semibold">{taskName}</h3>

      <div className="flex items-center justify-between mt-2">
        <span className="text-sm">Progress: {progress}%</span>

        <div className="flex items-center text-sm text-gray-500">
          <FiClock className="mr-1" />
          <span>{deadline}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        {/* Progress bar */}
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default TaskCard;

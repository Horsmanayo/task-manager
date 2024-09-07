interface TaskCardProps {
  taskImage: string;
  taskName: string;
  progress: number;
  deadline: string;
}

const TaskCard = ({
  taskImage,
  taskName,
  progress,
  deadline,
}: TaskCardProps) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white h-auto space-y-8">
      {/* image */}
      <div>
        <img src={taskImage} alt="Task Image" className="w-[100vw] h-[30vh]" />
      </div>

      {/* content */}
      <h3 className="text-lg font-semibold">{taskName}</h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm">Progress: {progress}%</span>
        <span className="text-sm text-gray-500">{deadline}</span>
      </div>
      
      {/* progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskCard;

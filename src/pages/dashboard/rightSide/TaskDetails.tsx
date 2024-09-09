// All the components of TaskDetail are rendered if they are available

interface TaskDetailProps {
  image?: string;
  taskName?: string;
  progress?: number;
  deadline?: string;
  description?: string;
  instructorImage?: string;
  instructorName?: string;
  steps?: string[];
}

const TaskDetail = ({
  image,
  taskName,
  progress,
  deadline,
  description,
  instructorImage,
  instructorName,
  steps,
}: TaskDetailProps) => {
  return (
    <div className="ml-8 p-4 border rounded-md shadow-lg bg-white w-[400px] h-[650px]">
      {/* Task Image */}
      {image && (
        <img
          src={image}
          alt={taskName}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />
      )}

      <h3 className="text-xl font-semibold mb-4">{taskName}</h3>

      <p className="text-sm text-gray-500 mb-2">Deadline: {deadline}</p>

      <p className="text-sm text-gray-500 mb-2">Progress: {progress}%</p>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Task Description */}
      {description && (
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {description}
        </p>
      )}

      {/* Display Steps */}
      {steps && steps.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Steps:</h4>
          <ol className="list-decimal list-inside text-gray-700">
            {steps.map((step: string, index: number) => (
              <li key={index} className="mb-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Instructor Details */}
      {instructorImage && instructorName && (
        <div className="flex items-center mt-6">
          {/* Instructor Image */}
          <img
            src={instructorImage}
            alt={instructorName}
            className="w-16 h-16 rounded-full mr-4 object-cover border border-gray-300"
          />
          {/* Instructor Name */}
          <div>
            <p className="text-sm font-semibold">{instructorName}</p>
            <p className="text-sm text-gray-500">Instructor</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;

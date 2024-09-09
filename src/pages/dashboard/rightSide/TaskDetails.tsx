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
    <div className="p-4 border rounded-md shadow-lg bg-white w-full  max-w-4xl mx-auto">
      {image && (
        <img
          src={image}
          alt={taskName}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
      )}

      <h3 className="text-2xl md:text-3xl font-semibold mb-4">{taskName}</h3>

      <p className="text-sm text-gray-500 mb-2">Deadline: {deadline}</p>

      <p className="text-sm text-gray-500 mb-2">Progress: {progress}%</p>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {description && (
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {description}
        </p>
      )}

      {steps && steps.length > 0 && (
        <div className="mb-4">
          <h4 className="text-lg md:text-xl font-semibold mb-2">Steps:</h4>
          <ol className="list-decimal list-inside text-gray-700">
            {steps.map((step: string, index: number) => (
              <li key={index} className="mb-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {instructorImage && instructorName && (
        <div className="flex items-center mt-6">
          <img
            src={instructorImage}
            alt={instructorName}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-4 object-cover border border-gray-300"
          />
          <div>
            <p className="text-sm md:text-base font-semibold">{instructorName}</p>
            <p className="text-sm text-gray-500">Instructor</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;

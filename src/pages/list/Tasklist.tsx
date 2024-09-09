import { useState } from "react";
import { mockTasks, Task } from "../../data/taskData";

const TaskList = () => {
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");

  const filteredTasks = mockTasks.filter((task) => {
    return (
      (filterStatus ? task.status === filterStatus : true) &&
      (filterPriority ? task.priority === filterPriority : true)
    );
  });

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Task List</h2>

      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Filter by Status */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Status
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="not started">Not Started</option>
          </select>
        </div>

        {/* Filter by Priority */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Priority
          </label>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Task List in Table Format */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-200 text-left">
              <th className="p-4 text-sm font-semibold text-gray-600">
                Task Name
              </th>
              <th className="p-4 text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="p-4 text-sm font-semibold text-gray-600">
                Priority
              </th>
              <th className="p-4 text-sm font-semibold text-gray-600">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTasks.length ? (
              filteredTasks.map((task: Task) => (
                <tr
                  key={task.id}
                  className="hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <td className="p-4 text-gray-800">{task.name}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        task.status === "completed"
                          ? "bg-green-100 text-green-600"
                          : task.status === "ongoing"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{task.dueDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-600">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;

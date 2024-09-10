import { useState } from "react"; // Import useState hook for managing component state
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import { useProjects } from "../../context/ProjectContext"; // Import useProjects hook from context for managing project data
import { useDispatch } from "react-redux";
import { createProject } from "../../features/management";

const AddProject: React.FC = () => {
  // Initialize navigation hook
  const navigate = useNavigate();
  // Destructure addProject function from the useProjects context
  const { addProject } = useProjects();
  const dispatch = useDispatch();

  // State to manage the new project's details
  const [newProject, setNewProject] = useState({
    id: 0,
    name: "",
    status: "Pending",
    priority: "Low",
    description: "",
    dueDate: "",
  });

  // State to manage validation errors for the form fields
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    dueDate: "",
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Object to collect validation errors
    const newErrors = {
      name: "",
      description: "",
      dueDate: "",
    };

    // Validation checks and setting error messages if fields are empty
    if (!newProject.name) newErrors.name = "Project name is required.";
    if (!newProject.description)
      newErrors.description = "Description is required.";
    if (!newProject.dueDate) newErrors.dueDate = "Due date is required.";

    // If there are validation errors, set them in state and stop form submission
    if (newErrors.name || newErrors.description || newErrors.dueDate) {
      setErrors(newErrors);
      return;
    }

    // Generate a unique ID for the new project
    const id = Date.now(); // Using current timestamp as unique ID

    dispatch(createProject({ ...newProject, id }));

    navigate("/dashboard/management");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title of the page */}
      <h2 className="text-3xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name Input */}
        <div>
          <label className="block text-lg">Project Name</label>
          <textarea
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {/* Display error message if there's an error with the project name */}
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        {/* Description Input */}
        <div>
          <label className="block text-lg">Description</label>
          <textarea
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {/* Display error message if there's an error with the description */}
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        {/* Status Dropdown */}
        <div>
          <label className="block text-lg">Status</label>
          <select
            value={newProject.status}
            onChange={(e) =>
              setNewProject({ ...newProject, status: e.target.value })
            }
            className="border p-2 w-full"
          >
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        {/* Priority Dropdown */}
        <div>
          <label className="block text-lg">Priority</label>
          <select
            value={newProject.priority}
            onChange={(e) =>
              setNewProject({ ...newProject, priority: e.target.value })
            }
            className="border p-2 w-full"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* Due Date Input */}
        <div>
          <label className="block text-lg">Due Date</label>
          <input
            type="date"
            value={newProject.dueDate}
            onChange={(e) =>
              setNewProject({ ...newProject, dueDate: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
          {/* Display error message if there's an error with the due date */}
          {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

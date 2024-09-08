import { useState } from 'react'; // Import useState hook for managing component state
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { useProjects } from '../../context/ProjectContext'; // Import useProjects hook from context for managing project data

const AddProject: React.FC = () => {
  // Initialize navigation hook
  const navigate = useNavigate();
  // Destructure addProject function from the useProjects context
  const { addProject } = useProjects();

  // State to manage the new project's details
  const [newProject, setNewProject] = useState({
    id: 0,
    name: '',
    status: 'Pending',
    priority: 'Low',
    description: '',
    duedate: ''
  });

  // State to manage validation errors for the form fields
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    duedate: ''
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Object to collect validation errors
    const newErrors = {
      name: '',
      description: '',
      duedate: ''
    };

    // Validation checks and setting error messages if fields are empty
    if (!newProject.name) newErrors.name = 'Project name is required.';
    if (!newProject.description) newErrors.description = 'Description is required.';
    if (!newProject.duedate) newErrors.duedate = 'Due date is required.';

    // If there are validation errors, set them in state and stop form submission
    if (newErrors.name || newErrors.description || newErrors.duedate) {
      setErrors(newErrors);
      return;
    }

    // Generate a unique ID for the new project
    const id = Date.now(); // Using current timestamp as unique ID

    // Add the new project using the context's addProject function
    addProject({ ...newProject, id });

    // Navigate to the management page after successful submission
    navigate('/dashboard/management');
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
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
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
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 w-full"
            required
          />
          {/* Display error message if there's an error with the description */}
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
        {/* Status Dropdown */}
        <div>
          <label className="block text-lg">Status</label>
          <select
            value={newProject.status}
            onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
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
            onChange={(e) => setNewProject({ ...newProject, priority: e.target.value })}
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
            value={newProject.duedate}
            onChange={(e) => setNewProject({ ...newProject, duedate: e.target.value })}
            className="border p-2 w-full"
            required
          />
          {/* Display error message if there's an error with the due date */}
          {errors.duedate && <p className="text-red-500">{errors.duedate}</p>}
        </div>
        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

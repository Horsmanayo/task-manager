import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddProjectProps {
  addProject: (project: {
    id: number;
    name: string;
    status: string;
    priority: string;
    description: string;
    duedate: string;
  }) => void;
}

const AddProject: React.FC<AddProjectProps> = ({ addProject }) => {
  const navigate = useNavigate();

  // Initialize state for new project
  const [newProject, setNewProject] = useState({
    id: 0, // ID will be set after the project is added
    name: '',
    status: 'Pending',
    priority: 'Low',
    description: '',
    duedate: ''
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    duedate: ''
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {
      name: '',
      description: '',
      duedate: ''
    };

    if (!newProject.name) newErrors.name = 'Project name is required.';
    if (!newProject.description) newErrors.description = 'Description is required.';
    if (!newProject.duedate) newErrors.duedate = 'Due date is required.';

    if (newErrors.name || newErrors.description || newErrors.duedate) {
      setErrors(newErrors);
      return;
    }

    // Generate a new ID for the project
    const id = Date.now(); // or use a different strategy to generate unique IDs

    // Add project
    addProject({ ...newProject, id });

    // Navigate back to the management page
    navigate('/dashboard/management');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Project Name</label>
          <input
            type="text"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="border p-2 w-full"
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-lg">Description</label>
          <input
            type="text"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 w-full"
            required
          />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
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
        <div>
          <label className="block text-lg">Due Date</label>
          <input
            type="date"
            value={newProject.duedate}
            onChange={(e) => setNewProject({ ...newProject, duedate: e.target.value })}
            className="border p-2 w-full"
          />
          {errors.duedate && <p className="text-red-500">{errors.duedate}</p>}
        </div>
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

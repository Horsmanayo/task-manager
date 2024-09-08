import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  status: string;
  priority: string;
  description: string;
  duedate: string;
}

interface ManagementProps {
  projects: Project[];
  onUpdateProject: (updatedProject: Project) => void; // Callback to handle project update
  onDeleteProject: (id: number) => void; // Callback to handle project deletion
}

const Management: React.FC<ManagementProps> = ({ projects, onUpdateProject, onDeleteProject }) => {
  const navigate = useNavigate();

  // Function to handle editing a project
  const handleEdit = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      const updatedName = prompt("Edit project name:", project.name);
      const updatedDescription = prompt("Edit project description:", project.description);
      if (updatedName && updatedDescription) {
        const updatedProject = { ...project, name: updatedName, description: updatedDescription };
        onUpdateProject(updatedProject);
      }
    }
  };

  // Function to handle deleting a project
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      onDeleteProject(id);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Task Management</h2>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-6"
        onClick={() => navigate("/dashboard/management/add-project")}
      >
        Add New Project
      </button>

      <div className="grid grid-cols-1fr-3fr gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 shadow-md flex flex-col justify-between rounded-lg"
          >
            <div className="flex flex-col">
              <strong className="text-lg mb-2">{project.name}</strong>
              <p className="mb-2">{project.description}</p>
              <p>
                Status: {project.status} | Priority: {project.priority} | Due: {project.duedate}
              </p>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleEdit(project.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;

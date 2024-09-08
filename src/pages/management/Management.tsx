import { useProjects } from "../../context/ProjectContext"; // Import useProjects hook from context for managing project data
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

const Management: React.FC = () => {
  // Destructure projects, updateProject, and deleteProject from the useProjects context
  const { projects, updateProject, deleteProject } = useProjects();
  // Initialize navigation hook
  const navigate = useNavigate();

  // Function to handle editing a project
  const handleEdit = (id: number) => {
    // Find the project to be edited by its ID
    const project = projects.find(p => p.id === id);
    if (project) {
      // Prompt user for new name and description
      const updatedName = prompt("Edit project name:", project.name);
      const updatedDescription = prompt("Edit project description:", project.description);
      if (updatedName && updatedDescription) {
        // Create a new project object with updated details
        const updatedProject = { ...project, name: updatedName, description: updatedDescription };
        // Call updateProject to save the changes
        updateProject(updatedProject);
      }
    }
  };

  // Function to handle deleting a project
  const handleDelete = (id: number) => {
    // Confirm with user before deleting
    if (window.confirm("Are you sure you want to delete this project?")) {
      // Call deleteProject to remove the project
      deleteProject(id);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title of the page */}
      <h2 className="text-3xl font-bold mb-6">Task Management</h2>

      {/* Button to navigate to the add project page */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-6"
        onClick={() => navigate("/dashboard/management/add-project")}
      >
        Add New Project
      </button>

      {/* Grid layout to display all projects */}
      <div className="grid grid-cols-1 gap-6">
        {/* Map over the projects and render a card for each one */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 shadow-md rounded-lg w-full"
            style={{ minHeight: '200px' }} // Ensure a decent height for the card
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Display project name */}
                <strong className="text-2xl mb-2">{project.name}</strong>
                {/* Display project description */}
                <p className="mb-2">{project.description}</p>
                {/* Display project status, priority, and due date */}
                <p>
                  Status: {project.status} | Priority: {project.priority} | Due: {project.duedate}
                </p>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                {/* Button to edit the project */}
                <button
                  onClick={() => handleEdit(project.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                {/* Button to delete the project */}
                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;

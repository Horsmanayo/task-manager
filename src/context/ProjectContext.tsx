// Import necessary dependencies from React library
import { createContext, useState, ReactNode, useContext } from 'react';
// Import projectData from separate file for separating concerns
import { projectData } from '../utils/projectData';

// Define Project interface to represent a project object
interface Project {
  // Unique identifier for the project
  id: number;
  // Name of the project
  name: string;
  // Status of the project
  status: string;
  // Priority of the project
  priority: string;
  // Description of the project
  description: string;
  // Due date of the project
  duedate: string;
}

// Define ProjectContextType interface to represent the project context
interface ProjectContextType {
  // Array of projects
  projects: Project[];
  // Function to add a new project
  addProject: (project: Project) => void;
  // Function to update an existing project
  updateProject: (updatedProject: Project) => void;
  // Function to delete a project by id
  deleteProject: (id: number) => void;
}

// Create ProjectContext with an initial value of undefined
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Define ProjectProvider component to wrap the app and provide project context
export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize projects state with projectData
  const [projects, setProjects] = useState<Project[]>(projectData);

  // Function to add a new project
  const addProject = (project: Project) => {
    // Update projects state by adding the new project
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  // Function to update an existing project
  const updateProject = (updatedProject: Project) => {
    // Update projects state by mapping and updating the project
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  // Function to delete a project by id
  const deleteProject = (id: number) => {
    // Update projects state by filtering out the project with the given id
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  // Return ProjectContext.Provider with the project context value
  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Define useProjects hook to provide project context
export const useProjects = () => {
  // Get project context using useContext hook
  const context = useContext(ProjectContext);
  // Throw error if hook is used outside of ProjectProvider
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  // Return project context
  return context;
};
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import Management from "../management/Management";
import AddProject from "../management/AddProject"; // Import AddProject component
import { useState } from "react";
import { projectData } from "../../utils/projectData"; // Assuming initial project data is here

const Dashboard = () => {
  // State to manage projects
  const [projects, setProjects] = useState(projectData);

  // Function to handle adding a new project
  const addProject = (project: {
    id: number;
    name: string;
    status: string;
    priority: string;
    description: string;
    duedate: string;
  }) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  // Function to handle updating a project
  const updateProject = (updatedProject: {
    id: number;
    name: string;
    status: string;
    priority: string;
    description: string;
    duedate: string;
  }) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  // Function to handle deleting a project
  const deleteProject = (id: number) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/management"
          element={
            <Management
              projects={projects}
              onUpdateProject={updateProject}
              onDeleteProject={deleteProject}
            />
          }
        />
        <Route
          path="/management/add-project"
          element={<AddProject addProject={addProject} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addProject,
  editProject,
  deleteProject,
} from "../../redux/projectSlice";

const ProjectManagementScreen: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  const dispatch = useDispatch();
  const [newProject, setNewProject] = useState({
    id: 0,
    name: "",
    description: "",
    status: "Active",
  });

  const handleAdd = () => {
    dispatch(addProject({ ...newProject, id: projects.length + 1 }));
    setNewProject({ id: 0, name: "", description: "", status: "Active" });
  };

  const handleEdit = (project: any) => {
    const updatedProject = {
      ...project,
      name: prompt("Edit project name", project.name) || project.name,
    };
    dispatch(editProject(updatedProject));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProject(id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Project Management</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-white p-4 shadow-md flex justify-between items-center"
          >
            <div>
              <strong className="text-lg">{project.name}</strong> -{" "}
              {project.description} [{project.status}]
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(project)}
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
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2">Add New Project</h3>
        <input
          type="text"
          placeholder="Project name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectManagementScreen;

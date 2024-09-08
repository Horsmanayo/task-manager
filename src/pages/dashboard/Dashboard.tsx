// Import necessary dependencies from react-router-dom
import { Route, Routes } from "react-router-dom";

// Import Sidebar component
import Sidebar from "../../component/Sidebar";

// Import Overview component
import Overview from "./Overview";

// Import Management component
import Management from "../management/Management";

// Import AddProject component
import AddProject from "../management/AddProject";

// Import ProjectProvider from ProjectContext
import { ProjectProvider } from "../../context/ProjectContext";

const Dashboard = () => {
  return (
    // Wrap the app with ProjectProvider to provide project context
    <ProjectProvider>
      <div className="     flex">
        {/* // Render Sidebar component */}
        <Sidebar />
        {/* // Define routes for the app */}
        <Routes>
          {/* // Route for Overview component */}
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          {/* // Route for Management component */}
          <Route path="/management/*" element={<Management />} />
          {/* // Route for AddProject component */}
          <Route path="/management/add-project" element={<AddProject />} />
        </Routes>
      </div>
    </ProjectProvider>
  );
};

export default Dashboard;
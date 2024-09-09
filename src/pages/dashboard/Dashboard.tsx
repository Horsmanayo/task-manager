// Import necessary dependencies from react-router-dom
import { Route, Routes } from "react-router-dom";

// Import Sidebar component
import Sidebar from "../../components/Sidebar";

// Import Overview component
import Overview from "./Overview";

// Import Management component
import Management from "../management/Management";
import NotificationComponent from "../notification/Notification";
import TeamMembersScreen from "../../components/TeamMembersScreen";

// Import AddProject component
import AddProject from "../management/AddProject";

// Import ProjectProvider from ProjectContext
import { ProjectProvider } from "../../context/ProjectContext";
import TaskList from "../list/Tasklist";
import PreviewPage from "../previewpage/PreviewPage";
import Chat from "../chat/Chat";

const Dashboard = () => {
  return (
    // Wrap the app with ProjectProvider to provide project context
    <ProjectProvider>
      <div className="flex">
        {/* // Render Sidebar component */}
        <Sidebar />
        {/* // Define routes for the app */}
        <div className="w-[calc(100%-256px)]">
          <Routes>
            {/* // Route for Overview component */}
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/:id" element={<PreviewPage />} />
            {/* // Route for Management component */}
            <Route path="/management/*" element={<Management />} />
            {/* // Route for AddProject component */}
            <Route path="/management/add-project" element={<AddProject />} />
            <Route path="/notification" element={<NotificationComponent />} />
            <Route path="/team-members" element={<TeamMembersScreen />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </ProjectProvider>
  );
};

export default Dashboard;

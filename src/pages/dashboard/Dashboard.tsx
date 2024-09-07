import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import ProjectManagementScreen from "../management/ProjectManagementScreen";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/management" element={<ProjectManagementScreen />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

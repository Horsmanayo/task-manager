import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import Management from "../management/Management";
import NotificationComponent from "../notification/Notification";
import TeamMembersScreen from "../../component/TeamMembersScreen";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/management" element={<Management />} />
        <Route path="/notification" element={<NotificationComponent />} />
        <Route path="/team-members" element={<TeamMembersScreen />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import Management from "../management/Management";
import NotificationComponent from "../notification/Notification";
import Chat from "../chat/Chat";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/management" element={<Management />} />
        <Route path="/notification" element={<NotificationComponent />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

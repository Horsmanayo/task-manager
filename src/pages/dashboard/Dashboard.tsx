import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

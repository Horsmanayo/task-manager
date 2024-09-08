import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Overview from "./Overview";
import TaskList from "../list/Tasklist";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import Header from "../previewpage/Header";
import PreviewTask from "../previewpage/PreviewTask";
import Tasks from "../previewpage/Tasks";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/header" element={<Header />} />
        <Route path="/previewtask" element={<PreviewTask />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

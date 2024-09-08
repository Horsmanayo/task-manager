import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/Sidebar";
import Overview from "./Overview";
import Management from "../management/Management";
import PreviewPage from "../previewpage/PreviewPage";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/management" element={<Management />} />
        <Route path="/task/:id" element={<PreviewPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

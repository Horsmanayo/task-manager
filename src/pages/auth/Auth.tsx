import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Auth;

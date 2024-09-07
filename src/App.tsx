import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./component/Loader";

const LazyAuth = lazy(() => import("./pages/auth/Auth"));
const LazyDashboard = lazy(() => import("./pages/dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<LazyDashboard />} />
        {/* Auth route declaration below */}
        <Route path="/auth/*" element={<LazyAuth />} />

        {/* New Route */}
        {/* default route */}
        <Route path="*" element={<div>404: Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;

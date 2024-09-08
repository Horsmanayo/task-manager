import { Navigate, Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom
import { lazy, Suspense } from "react"; // Import lazy loading and Suspense for dynamically loading components
import Loader from "./component/Loader"; // Import a loader component to show while waiting for lazy-loaded components

// Lazy load the Auth and Dashboard components to improve performance by splitting code
const LazyAuth = lazy(() => import("./pages/auth/Auth")); 
const LazyDashboard = lazy(() => import("./pages/dashboard/Dashboard"));

function App() {
  return (
    // Suspense provides a fallback UI (Loader) while lazy components are loading
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Redirect the root path to the dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Route for the dashboard, loading LazyDashboard component */}
        <Route path="/dashboard/*" element={<LazyDashboard />} />

        {/* Auth route declaration below, loading LazyAuth component */}
        <Route path="/auth/*" element={<LazyAuth />} />

        {/* Catch-all route for undefined paths, displaying a 404 message */}
        <Route path="*" element={<div>404: Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;

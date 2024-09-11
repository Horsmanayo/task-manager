import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import {
  FiBookOpen,
  FiGrid,
  FiBook,
  FiUsers,
  FiMessageCircle,
  FiSettings,
  FiHelpCircle,
  FiActivity,
  FiMenu,
} from "react-icons/fi";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger menu for mobile view */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="container"
        className={`h-[100vh] bg-gray-50 w-64 flex flex-col justify-between shadow-lg fixed transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        {/* logo and navigation */}
        <div className="p-5">
          {/* logo */}
          <div className="text-2xl font-bold mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl bg-blue-600 p-2 border rounded-lg">
                <FiBookOpen />
              </span>
              <h1 className="text-black-600 text-4xl">SGT</h1>
            </div>
          </div>

          {/* navigation links */}
          <nav className="space-y-4">
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiGrid className="text-lg" />
              <span>Overview</span>
            </NavLink>

            <NavLink
              to="/dashboard/tasks"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiBook className="text-lg" />
              <span>Task</span>
            </NavLink>

            <NavLink
              to="/dashboard/management"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiActivity className="text-lg" />
              <span>Management</span>
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiBook className="text-lg" />
              <span>Settings</span>
            </NavLink>

            <NavLink
              to="/dashboard/team-members"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiUsers className="text-lg" />
              <span>Team Members</span>
            </NavLink>

            <NavLink
              to="/dashboard/notification"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiMessageCircle className="text-lg" />
              <span>Notification</span>
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <FiSettings className="text-lg" />
              <span>Settings</span>
            </NavLink>

            <NavLink
              to="/dashboard/chat"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              <BsChatLeftText className="text-lg" />
              <span>Chat</span>
            </NavLink>
          </nav>
        </div>

        {/* help center */}
        <div className="relative bg-gray-900 text-white px-6 py-8 mt-auto m-4 rounded-lg flex flex-col items-center justify-center space-y-6">
          {/* help icon */}
          <div className="absolute -top-6 bg-gray-900 rounded-full p-2 border-2">
            <FiHelpCircle className="text-4xl text-white" />
          </div>

          {/* help Center Content */}
          <div className="flex flex-col items-center mt-8">
            <p className="font-semibold">Help Center</p>
          </div>
          <p className="text-center text-sm">
            Having Trouble in Learning? Please contact us for more questions.
          </p>
          <button className="bg-blue-500 py-2 px-4 rounded-lg w-full text-white">
            Go To Help Center
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}

      {/* Placeholder for spacing next to sidebar */}
      <div className="w-64"></div>
    </>
  );
};

export default Sidebar;

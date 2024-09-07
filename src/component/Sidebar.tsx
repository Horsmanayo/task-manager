import { NavLink } from "react-router-dom";
import {
  FiBookOpen,
  FiGrid,
  FiBook,
  FiUsers,
  FiMessageCircle,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
// import authImage from "../../assets/images/overview.svg";

const Sidebar = () => {
  return (
    <div
      id="container"
      className="h-screen bg-gray-50 w-64 flex flex-col justify-between shadow-lg"
    >
      {/* logo and navigation */}
      <div className="p-5">
        {/* logo */}
        <div className="text-2xl font-bold mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-white text-3xl bg-blue-600 p-2 border rounded-lg">
              <FiBookOpen />
            </span>
            <h1 className="text-black-600 text-4xl">Nuegas</h1>
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
            to="/tasks"
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
            to="/mentors"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-md ${
                isActive
                  ? "text-blue-600 bg-gray-200"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            <FiUsers className="text-lg" />
            <span>Mentors</span>
          </NavLink>

          <NavLink
            to="/message"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-md ${
                isActive
                  ? "text-blue-600 bg-gray-200"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            <FiMessageCircle className="text-lg" />
            <span>Message</span>
          </NavLink>

          <NavLink
            to="/settings"
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
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
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
          <Link
            to="/dashboard/overview"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <FiGrid className="text-lg" />
            {/* <img src={authImage} alt="logo suppose dey here" /> */}
            <span>Overview</span>
          </Link>

          <Link
            to="/dashboard/tasks"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <FiBook className="text-lg" />
            <span>Task</span>
          </Link>

          <Link
            to="/mentors"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <FiUsers className="text-lg" />
            <span>Mentors</span>
          </Link>

          <Link
            to="/message"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <FiMessageCircle className="text-lg" />
            <span>Message</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <FiSettings className="text-lg" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* help center */}
      <div className="relative bg-gray-900 text-white px-6 py-8 mt-auto m-4 rounded-lg flex flex-col items-center justify-center space-y-6">
        {/* help icon*/}
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

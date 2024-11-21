import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaHome,
  FaList,
  FaSearch,
  FaBars,
} from "react-icons/fa";

const DashboardSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white h-screen p-4 shadow-lg ${
        isCollapsed ? "w-20" : "w-48"
      } transition-width duration-300 ease-in-out`}
    >
      {/* Toggle Button */}
      <div className="flex justify-start mb-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {}
          <FaBars className="text-gray-600 hover:text-primary" size={28} />
        </button>
      </div>

      {/* Navigation Section */}
      <div>
        <h3
          className={`text-lg font-bold text-primary ${
            isCollapsed && "hidden"
          }`}
        >
          Navigation
        </h3>
        <ul className="mt-4">
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaHome size={20} />
              {!isCollapsed && <span className="ml-2">Introduction</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/habits"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaList size={20} />
              {!isCollapsed && <span className="ml-2">Habits</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/search"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaSearch size={20} />
              {!isCollapsed && <span className="ml-2">Search</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="mb-8">
        <h3
          className={`text-lg font-bold text-primary ${
            isCollapsed && "hidden"
          }`}
        >
          Account
        </h3>
        <ul className="mt-4">
          <li className="mb-4">
            <Link
              to="/dashboard/profile"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaUser size={20} />
              {!isCollapsed && <span className="ml-2">Profile</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/settings"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaCog size={20} />
              {!isCollapsed && <span className="ml-2">Settings</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/dashboard/help"
              className="flex items-center text-gray-700 hover:text-primary"
            >
              <FaQuestionCircle size={20} />
              {!isCollapsed && <span className="ml-2">Help</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;

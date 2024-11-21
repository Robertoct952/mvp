import React, { useState } from "react";
import Houses from "../components/Houses";
import logo from "../assets/logo.png";

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="mb-8 p-4 bg-white border-b-2 border-primary shadow-md rounded-sm grid grid-cols-3 gap-4 md:grid-cols-3">
        {/* Left Section: Logo, Title, and Subtitle (2/3 width) */}
        <div className="col-span-3 md:col-span-2 flex items-center space-x-4">
          {/* Logo - Hidden on small screens */}
          <img
            src={logo}
            alt="Website Logo"
            className="h-16 w-auto flex-shrink-0 hidden lg:block"
          />

          {/* Title and Subtitle */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Explore Shared Living Spaces
            </h2>
            <p className="text-gray-600 text-lg">
              Welcome to your dashboard! Here you can browse available homes and
              connect with potential roommates.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-0 col-span-3 md:col-span-1 flex flex-col items-start md:items-end justify-center">
          <p className="text-sm text-gray-500 mb-1">Click here to</p>
          <button
            className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            onClick={() => setShowModal(true)}
          >
            Browse Anonymous Users
          </button>
        </div>
      </header>

      {/* Modal for Browsing Anonymous Users */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg mb-4">Anonymous Users</h2>
            <button
              className="bg-red-500 px-4 py-2 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex mt-3">
        <Houses />
      </main>
    </>
  );
};

export default Dashboard;

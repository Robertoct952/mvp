import React, { useState } from "react";
import Houses from "../components/Houses";

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore Shared Living Spaces</h2>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Browse Anonymous Users
        </button>
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

      {/* Scrollable Section for Homes/Shared Living Spaces */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
        {[1, 2, 3, 4, 5].map((home) => (
          <div key={home} className="border rounded p-4 bg-white shadow-lg">
            <img
              src={`https://via.placeholder.com/150?text=Home+${home}`}
              alt={`Home ${home}`}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Home {home}</h3>
            <p className="text-gray-600">Location: City {home}</p>
            <button className="bg-primary text-white px-4 py-2 mt-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </main>

      {/* Mock API */}
      <div className="flex mt-3">
        <Houses />
      </div>
    </div>
  );
};

export default Dashboard;

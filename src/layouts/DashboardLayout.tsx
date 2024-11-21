import React from "react";
import DashboardSidebar from "../components/DashSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="sm:flex-1 p-6 ml-auto transition-margin duration-300 ease-in-out overflow-y-auto">
        <main>
          <Outlet /> {/* Render child routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

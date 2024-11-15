import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import RevenueChart from "./RevenueChart";
import BalanceChart from "./BalanceChart";
// import userAvatar from 'profile-pic.png'; // Replace with actual path or image URL
import userAvatar from '../assets/profile-pic.png';


function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Toggle sidebar visibility for mobile view
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <Header toggleSidebar={toggleSidebar} userAvatar={userAvatar} />

      {/* Sidebar and Main Content */}
      <div className="flex">
        <Sidebar isVisible={isSidebarVisible} />
        
        <main className="flex-1 flex flex-col gap-4 p-4">
          {/* Revenue and Charts Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 bg-gray-800 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">Revenue Flow</h2>
              <RevenueChart />
            </div>

            <div className="flex flex-col gap-4 lg:w-64">
              <div className="bg-gray-800 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Available Balance</h2>
                <BalanceChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import Header from "./Dashboard/Header";
import RevenueChart from "./Dashboard/RevenueChart";
import BalanceChart from "./Dashboard/BalanceChart";

function DashboardMain() {
  return (
    <div className="bg-gray-900 text-gray-100 overflow-x-clip min-h-screen">
      <Header />
      <div className="flex p-3 gap-4">
        <Sidebar />
        <main className="flex-1 flex flex-col lg:flex-row gap-4 ml-64 lg:ml-0">
          <section className="bg-gray-800 p-4 rounded-lg flex flex-col flex-1 gap-6">
            <div className="bg-gray-700 p-5 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <i className="bx bx-trending-up text-teal-400 text-2xl"></i>
                  <h2 className="text-lg font-semibold text-gray-100">Revenue Flow</h2>
                </div>
                <span className="text-xl font-bold text-gray-100">$24,300</span>
              </div>
              <RevenueChart />
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-700 p-5 rounded-md flex-1 flex justify-between">
                <span className="text-gray-100">Income: $15,200</span>
                <span className="text-green-400">+8%</span>
              </div>
              <div className="bg-gray-700 p-5 rounded-md flex-1 flex justify-between">
                <span className="text-gray-100">Expenses: $6,700</span>
                <span className="text-red-400">-5%</span>
              </div>
            </div>
          </section>
          <section className="bg-gray-800 p-4 rounded-lg flex flex-col flex-1">
            <h2 className="text-lg font-semibold text-gray-100">Available Balance</h2>
            <BalanceChart />
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardMain;

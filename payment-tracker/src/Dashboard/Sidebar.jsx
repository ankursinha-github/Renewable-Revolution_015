import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 bg-gray-800 p-4 w-64 lg:w-64 z-10`}
      >
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-100 text-3xl absolute top-4 right-4"
          aria-label="Toggle Sidebar"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Sidebar Navigation */}
        <nav className="space-y-4 mt-8">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-home-alt text-teal-400"></i>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-line-chart text-teal-400"></i>
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-wallet text-teal-400"></i>
            <span>Transactions</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-user text-teal-400"></i>
            <span>Account</span>
          </a>
          <Link to={"/companyform"}
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-cog text-teal-400"></i>
            <span>Settings</span>
          </Link>
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-300 p-3 rounded-md hover:bg-gray-700"
          >
            <i className="bx bx-help-circle text-teal-400"></i>
            <span>Help</span>
          </a>
        </nav>
      </aside>

    
    </div>
  );
}

export default Sidebar;

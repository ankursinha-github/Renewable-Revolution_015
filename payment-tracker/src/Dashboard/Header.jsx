import React from "react";
import { useAuth } from "../context/AuthContext"; // Assuming you have an AuthContext set up
import md5 from "md5";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // Redirect or reset the state
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  function getGravatarUrl  (email)  {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}`;
  };
  return (
    <header className="p-4 flex justify-between items-center bg-gray-800">
      <div className="flex items-center gap-2 text-teal-400 cursor-pointer">
        <i className="bx bx-infinite text-3xl"></i>
        <span className="text-xl font-semibold">Payment Tracker</span>
      </div>

      {/* Search bar visible on large screens */}
      <div className="hidden lg:flex items-center gap-4 bg-gray-700 p-2 rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none w-64"
        />
        <i className="bx bx-search text-gray-400"></i>
      </div>

      {/* User Info (Avatar and Name) */}
      <div className="flex items-center gap-4">
        {currentUser && (
          <>
            <span className="text-gray-300 font-medium">
              {currentUser.displayName || currentUser.email}
            </span>
            <img
              src={
                getGravatarUrl(currentUser.email) ||
                "https://via.placeholder.com/40?text=Avatar" // Fallback if no photoURL
              }
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-600"
            />
          </>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;

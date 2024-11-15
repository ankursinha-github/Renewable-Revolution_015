import React from "react";

function Header() {
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
      <div className="flex items-center gap-2">
        <span className="text-gray-300 font-medium">Nandkishore Parmar</span>
        <img
          src="https://nandkishoreparmar.netlify.app/assets/img/profile-pic.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-600"
        />
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewProfile = () => {
    navigate("/profile"); // Navigate to profile page
  };

  return (
    <header className="bg-gray-200 text-gray py-3 px-6 flex justify-between items-center fixed top-0 left-64 right-0 z-10 max-w-full">
      <h1 className="text-lg font-bold">Dashboard Header</h1>
      
      {/* Profile Avatar with dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          {/* Placeholder for user profile (use initials or an avatar image here) */}
          <span className="font-bold">U</span>
        </button>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-48 py-2">
            <button
              onClick={handleViewProfile}
              className="block px-4 py-2 text-gray-700 w-full text-left hover:bg-gray-100"
            >
              View Profile
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-700 w-full text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

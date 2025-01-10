import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 font-bold text-lg">Resource Manager</div>

      {/* Navigation Links */}
      <ul className="flex-1">
        <li>
          <NavLink
            to="/dashboard/tasks"
            className={({ isActive }) =>
              `block p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Tasks
          </NavLink>
        </li>
        {/* Add more navigation items as needed */}
      </ul>

      {/* Logout Button */}
      {/* <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;

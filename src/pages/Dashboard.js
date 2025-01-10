import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskList from "./TaskList";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Content */}
        <div className="flex-1 p-5 pt-16 overflow-auto bg-gray-100">
          {/* Add padding to compensate for fixed header */}
          <Routes>
            <Route path="/" element={<Navigate to="tasks" />} />
            <Route path="tasks" element={<TaskList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

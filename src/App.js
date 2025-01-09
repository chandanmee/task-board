import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import TaskList from "./pages/TaskList";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the root path to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Public login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route
          path="/tasks"
          element={<PrivateRoute element={<TaskList />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

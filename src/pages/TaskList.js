import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // Store total items dynamically

  const tasksPerPage = 10; // Number of tasks per page

  useEffect(() => {
    fetchTasks(currentPage);
  }, [currentPage]);

  const fetchTasks = async (page) => {
    setLoading(true);
    try {
      const response = await getTasks(page, tasksPerPage); // Fetch tasks with pagination
      setTasks(response.data); // Set tasks for the current page

      // Get total number of tasks from the response headers
      const totalTasks = response.headers["x-total-count"];
      setTotalItems(totalTasks); // Dynamically set the total items
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Display the Navbar */}
      <div className="container mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        {loading ? (
          <p className="text-center mt-6">Loading tasks...</p>
        ) : (
          <>
            <ul>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="bg-white shadow-md rounded-lg mb-4 p-4 flex justify-between items-center"
                >
                  <span>{task.title}</span>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TaskList;

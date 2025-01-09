import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask } from "../services/api";

const TaskForm = ({ editing = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, completed: false };

    const request = editing ? updateTask(id, task) : createTask(task);

    request.then(() => navigate("/tasks"));
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">
        {editing ? "Edit Task" : "Create Task"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editing ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({ task }) => {
  return (
    <li className="bg-white shadow-md rounded-lg mb-4 p-4 flex justify-between items-center">
      <Link to={`/tasks/${task.id}`} className="text-blue-600 font-semibold hover:underline">
        {task.title}
      </Link>
    </li>
  );
};

export default TaskItem;

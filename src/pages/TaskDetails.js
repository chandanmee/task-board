import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTaskById } from "../services/api";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTaskById(id).then((response) => setTask(response.data));
  }, [id]);

  if (!task) return <p className="text-center mt-6">Loading task details...</p>;

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <p>
          <strong>Title:</strong> {task.title}
        </p>
        <p>
          <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;

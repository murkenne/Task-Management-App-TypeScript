// Task List will allow for user to edit and update the status of the task
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList: React.FC = () => {
  const { state, dispatch } = useTaskContext();

  const handleDeleteTask = (taskId: string) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const handleToggleStatus = (taskId: string) => {
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: taskId });
  };

  if (state.tasks.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No tasks available. Start by adding a task!
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Task List</h2>
      <div className="row">
        {state.tasks.map((task) => (
          <div className="col-md-6 col-lg-4 mb-4" key={task.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">
                  {task.description || "No description provided."}
                </p>
                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`badge ${
                      task.status === "Pending" ? "bg-warning" : "bg-success"
                    }`}
                  >
                    {task.status}
                  </span>
                </p>
                <p className="card-text">
                  <strong>Priority:</strong>{" "}
                  <span className="text-primary">
                    {task.priority || "Not specified"}
                  </span>
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className={`btn ${
                      task.status === "Pending"
                        ? "btn-outline-success"
                        : "btn-outline-warning"
                    } btn-sm`}
                    onClick={() => handleToggleStatus(task.id)}
                  >
                    {task.status === "Pending" ? "Mark as Completed" : "Mark as Pending"}
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

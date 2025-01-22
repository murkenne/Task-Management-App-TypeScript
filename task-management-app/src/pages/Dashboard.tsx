import React from "react";
import { useTaskContext } from "../context/TaskContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard: React.FC = () => {
  const { state } = useTaskContext();

  // Calculate task counts based on status
  const totalTasks = state.tasks.length;
  const pendingTasks = state.tasks.filter((task) => task.status === "pending").length;
  const completedTasks = state.tasks.filter((task) => task.status === "completed").length;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">Pending Tasks</h5>
              <p className="card-text fs-4">{pendingTasks}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">Completed Tasks</h5>
              <p className="card-text fs-4">{completedTasks}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">Total Tasks</h5>
              <p className="card-text fs-4">{totalTasks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

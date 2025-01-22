import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/TaskTypes";

const TasksPage: React.FC = () => {
  const { dispatch } = useTaskContext();

  const handleAddTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(), // Generate unique ID
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Task Management</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList />
    </div>
  );
};

export default TasksPage;


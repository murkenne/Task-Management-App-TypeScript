import React, { useState } from "react";
import { Task } from "../types/TaskTypes";

interface TaskFormProps {
  onSubmit: (task: Omit<Task, "id">) => void; // Parent generates the ID
  initialData?: Partial<Task>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData = {} }) => {
  const [task, setTask] = useState<Omit<Task, "id">>({
    title: initialData.title || "",
    description: initialData.description || "",
    status: initialData.status || "pending",
    dueDate: initialData.dueDate || "",
    createdBy: initialData.createdBy || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task); // Pass the task to the parent for ID generation and further handling
    // Clear the form after submission
    setTask({
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
      createdBy: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          value={task.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows={4}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          className="form-control"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="createdBy" className="form-label">
          Created By
        </label>
        <input
          type="text"
          id="createdBy"
          name="createdBy"
          className="form-control"
          value={task.createdBy}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;


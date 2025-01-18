// Will have a task form to make and submit new task
import React, { useState } from 'react';  // Task Form Complete for now
import { Task } from '../types/TaskTypes'; // Fixed import path

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  initialData?: Partial<Task>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [task, setTask] = useState<Task>({
    id: initialData?.id || '',
    title: initialData?.title || '',
    description: initialData?.description || '',
    status: initialData?.status || 'pending',
    dueDate: initialData?.dueDate || '',
    createdBy: initialData?.createdBy || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task); // Submit the task
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
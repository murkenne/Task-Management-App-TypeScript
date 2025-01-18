import React, { createContext, useReducer, ReactNode, useContext } from "react";

// Define the Task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate: string;
  createdBy: string;
}

// Define the User interface
export interface User {
  id: string;
  name: string;
  email: string;
}

// Define the AppState structure
export interface AppState {
  tasks: Task[];
  currentUser: User | null;
}

// Define the actions
type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "EDIT_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "TOGGLE_TASK_STATUS"; payload: string }
  | { type: "SET_USER"; payload: User }
  | { type: "LOGOUT_USER" };

// Define the initial state
const initialState: AppState = {
  tasks: [],
  currentUser: null,
};

// Create a reducer function
const taskReducer = (state: AppState, action: TaskAction): AppState => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
            : task
        ),
      };
    case "SET_USER":
      return { ...state, currentUser: action.payload };
    case "LOGOUT_USER":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

// Create the context
const TaskContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<TaskAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Create a provider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

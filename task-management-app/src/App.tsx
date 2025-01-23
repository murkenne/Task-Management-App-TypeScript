import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./services/ProtectedRoute";
import NavBar from "./components/NavBar";
import TaskForm from "./pages/TaskForm";
import TaskList from "./pages/TaskList";

const App: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();


 {/*} if (isLoading) {
    return <div>Loading...</div>;
  }*/}

  return (
    <>
      <NavBar />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;


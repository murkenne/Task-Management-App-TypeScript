import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthenticationGuardProps {
  component: React.ComponentType;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component: Component,
}) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Show a loading indicator while the authentication state is being determined
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect unauthenticated users to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Render the protected component for authenticated users
  return <Component />;
};

export default AuthenticationGuard;

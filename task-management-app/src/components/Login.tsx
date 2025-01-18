import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Task Management App</h2>
      <p className="mb-4">
        Please log in to access your account and manage your tasks efficiently.
      </p>

      {isAuthenticated ? (
        <button
          className="btn btn-danger"
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          Log Out
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;

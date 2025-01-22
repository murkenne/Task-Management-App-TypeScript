import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { TaskProvider } from "./context/TaskContext";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-olxneqlayr1tp8li.us.auth0.com"
        clientId="s6IWmgnN9A1hTiE1LzSIfewdcEHu8sqt"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <TaskProvider>
          <App />
        </TaskProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);

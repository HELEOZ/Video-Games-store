import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';  // Importa Auth0Provider
import "./index.css";
import App from "./main-component/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Envuelve tu App con Auth0Provider y configura tus credenciales de Auth0 */}
    <Auth0Provider
      domain="dev-hxw4hi3s4hfo8p55.us.auth0.com"
      clientId="Avqj4thu7ESI1wisf5vJbJYbvvbTZ4Nm"
      r redirectUri={window.location.origin}  
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

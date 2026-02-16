// ======================================================
// APPLICATION ENTRY POINT
// ------------------------------------------------------
// Responsible for:
// - Bootstrapping React
// - Loading global styles
// - Rendering <App /> into #root
// ======================================================

// React Core
import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS
import "./index.css";
import "./css/design-system.css";

// Root App
import App from "./App";

// Mount application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
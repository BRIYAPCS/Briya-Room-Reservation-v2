// React core
import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS (must be inside src folder)
import "./index.css";

// Root App component
import App from "./App";

import "./css/design-system.css";


// Render application into #root in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

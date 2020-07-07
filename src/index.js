import React from "react";
import ReactDOM from "react-dom";

// Import our compiled tailwind css file.
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

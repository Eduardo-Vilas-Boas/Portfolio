import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!); // Add the non-null assertion operator (!) to ensure that container is not null

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

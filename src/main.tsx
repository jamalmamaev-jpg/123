import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";

console.log("App is initializing...");

const container = document.getElementById("root");

if (!container) {
  console.error("Failed to find the root element");
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App rendered successfully");
}
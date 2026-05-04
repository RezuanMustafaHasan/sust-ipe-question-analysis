import React from "react";
import { createRoot } from "react-dom/client";
import AIQuestionPatternDashboard from "./AIQuestionPatternDashboard";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AIQuestionPatternDashboard />
  </React.StrictMode>
);

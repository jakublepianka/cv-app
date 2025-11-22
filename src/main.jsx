import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./styles/layout.css";
import "./styles/cvEditor.css";
import "./styles/inputCard.css";
import "./styles/cvContainer.css";
import "./styles/inputFields.css";
import "./styles/mediaQueries.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

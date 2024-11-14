import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signupform from "./component/signupform";
import LoginSuccess from "./component/LoginSuccess";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Signupform />} />
        <Route path="/LoginSuccess" element={<LoginSuccess />} />
      </Routes>
    </Router>
  </StrictMode>
);

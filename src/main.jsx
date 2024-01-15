import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./main.scss";
import Home from "./pages/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/countdown" />} />
        <Route path="/countdown" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

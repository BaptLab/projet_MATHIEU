import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Matos from "./pages/matos/matos";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Matériel" element={<Matos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

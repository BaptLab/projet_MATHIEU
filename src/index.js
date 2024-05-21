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
import Projets from "./pages/projets/Projet";
import Contact from "./pages/contact/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Matos" element={<Matos />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";

// Import your page components
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import Legals from "./pages/legals/Legals";
import Matos from "./pages/matos/matos";
import Projets from "./pages/projets/Projet";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Matos" element={<Matos />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legals" element={<Legals />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

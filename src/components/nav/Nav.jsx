import React, { useState } from "react";
import NavBtn from "../btn/nav-btn/NavBtn";
import "./nav.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const switchNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="regular-nav">
        <div
          className="nav-container"
          id="backBtn-container"
        ></div>
        <div className="nav-container">
          <NavBtn redirect="" txt="Accueil"></NavBtn>
          <NavBtn
            redirect="matos"
            txt="Mon matériel"
          ></NavBtn>
          <NavBtn
            redirect="projets"
            txt="Mes projets"
          ></NavBtn>
          <NavBtn
            redirect="contact"
            txt="Me contacter"
          ></NavBtn>
        </div>
      </div>
      <div
        className={`sidenav ${isNavOpen ? "active" : ""}`}
      >
        <NavBtn redirect="" txt="Accueil"></NavBtn>
        <NavBtn redirect="Matos" txt="Matériel"></NavBtn>
        <NavBtn redirect="Projets" txt="Projets"></NavBtn>
        <NavBtn
          redirect="Contact"
          txt="Me contacter"
        ></NavBtn>
      </div>

      <div className="openBtn" onClick={switchNav}>
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </nav>
  );
}

export default Nav;

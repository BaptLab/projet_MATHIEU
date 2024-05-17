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
        >
          <NavBtn txt="Retour"></NavBtn>
        </div>
        <div className="nav-container">
          <NavBtn txt="Accueil"></NavBtn>
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
        <NavBtn txt="Accueil"></NavBtn>
        <NavBtn txt="Tarifs"></NavBtn>
        <NavBtn txt="Matériel"></NavBtn>
        <NavBtn txt="Projets"></NavBtn>
        <NavBtn txt="Me contacter"></NavBtn>
      </div>

      <a href="#" className="openBtn" onClick={switchNav}>
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </nav>
  );
}

export default Nav;

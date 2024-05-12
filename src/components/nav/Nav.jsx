import NavBtn from "../btn/nav-btn/NavBtn";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <NavBtn txt="Retour"></NavBtn>
      </div>
      <div className="nav-container">
        <NavBtn txt="Accueil"></NavBtn>
        <NavBtn txt="Tarifs"></NavBtn>
        <NavBtn txt="Matériel"></NavBtn>
        <NavBtn txt="Projets"></NavBtn>
        <NavBtn txt="Me contacter"></NavBtn>
      </div>
    </nav>
  );
}

export default Nav;

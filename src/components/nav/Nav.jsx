import NavBtn from "../btn/nav-btn/NavBtn";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <NavBtn txt="Accueil"></NavBtn>
      <NavBtn txt="Tarifs"></NavBtn>
      <NavBtn txt="Matériel"></NavBtn>
      <NavBtn txt="Projets"></NavBtn>
      <NavBtn txt="Me contacter"></NavBtn>
    </nav>
  );
}

export default Nav;

import { useCustomNavigate } from "../../utils/navigationUtils";
import "./header.css";

function Header() {
  return (
    <header>
      <span
        onClick={useCustomNavigate("/")}
        id="header-title"
      >
        TRUEPEAK PRODUCTIONS
      </span>
      <span id="subtitle-infos">
        Ingénieur du son - Technicien du son - Paris et
        banlieux proches - tournage et prise de son{" "}
      </span>
    </header>
  );
}

export default Header;

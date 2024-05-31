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
    </header>
  );
}

export default Header;

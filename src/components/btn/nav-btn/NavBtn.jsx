import { Link } from "react-router-dom";
import "./navbtn.css";

function NavBtn(props) {
  return (
    <Link
      className="btn-container"
      to={`/${props.redirect}`}
    >
      <div className="btn-container-txt">{props.txt}</div>
    </Link>
  );
}

export default NavBtn;

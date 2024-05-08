import { Link } from "react-router-dom";
import "./navbtn.css";

function NavBtn(props) {
  return (
    <div className="btn-container">
      <Link className="btn-container-txt" to={`/${props.txt}`}>
        {props.txt}
      </Link>
    </div>
  );
}

export default NavBtn;

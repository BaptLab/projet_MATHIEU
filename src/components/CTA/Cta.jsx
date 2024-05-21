import "./cta.css";
import { Button } from "@mui/material";
import { useCustomNavigate } from "../../utils/navigationUtils";

function Cta() {
  const customNavigate = useCustomNavigate();

  return (
    <div className="CTA-block">
      <h2 className="title question">
        Vous avez un projet ?
      </h2>
      <Button
        onClick={() => customNavigate("Contact")}
        variant="contained"
        color="primary"
      >
        Me contacter
      </Button>
    </div>
  );
}

export default Cta;

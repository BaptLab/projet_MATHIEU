import "./cta.css";
import { Button } from "@mui/material";

function Cta() {
  return (
    <div className="CTA-block">
      <h2 className="title question">
        Vous avez un projet ?
      </h2>
      <Button variant="contained" color="primary">
        Me contacter
      </Button>
    </div>
  );
}

export default Cta;

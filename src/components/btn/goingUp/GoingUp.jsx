import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./goingup.css";

function GoingUp() {
  return (
    <Fab
      color="primary"
      aria-label="arrow-up"
      id="going-up-btn"
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}

export default GoingUp;

import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./goingup.css";

function GoingUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      color="primary"
      aria-label="arrow-up"
      id="going-up-btn"
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}

export default GoingUp;

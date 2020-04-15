import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import MButton from "@material-ui/core/Button";
function App() {
  const style = useStyles();
  return (
    <div className={style.main}>
      <Typography className={style.WelcomeText}>
        I am a student studying computer science at UF
      </Typography>
      <IconBar />
      <MButton variant="outlined" color="secondary">
        Projects
      </MButton>
    </div>
  );
}

export default App;

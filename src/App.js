import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import MButton from "@material-ui/core/Button";
import Project from "./Components/Project.js";
function App() {
  const style = useStyles();
  const ProjectsSelected = (e) => {
    document.getElementById("Projects").scrollIntoView();
  };
  return (
    <div className={style.main}>
      <Typography className={style.WelcomeText}>
        I am a student studying computer science at UF
      </Typography>
      <IconBar />
      <MButton
        variant="outlined"
        color="secondary"
        onClick={(e) => ProjectsSelected()}
      >
        Projects
      </MButton>
      <div className={style.Projects} id="Projects">
        <Project
          title={"Interval Timer"}
          repoLink={"https://github.com/mdrewry"}
          description={"temp"}
          techStack={"xd"}
          optionalLink={"xd"}
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import MButton from "@material-ui/core/Button";
import Project from "./Components/Project.js";
import ProjectsList from "./ProjectsList";
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
      <div className={style.ProjectsWrapper}>
        <div className={style.Projects} id="Projects">
          <Grid className={style.ProjectsGrid} container spacing={3}>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[0].title}
                repoLink={ProjectsList[0].repoLink}
                description={ProjectsList[0].description}
                techStack={ProjectsList[0].techStack}
                optionalLink={ProjectsList[0].optionalLink}
                projectIcon={ProjectsList[0].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[0].title}
                repoLink={ProjectsList[0].repoLink}
                description={ProjectsList[0].description}
                techStack={ProjectsList[0].techStack}
                optionalLink={ProjectsList[0].optionalLink}
                projectIcon={ProjectsList[0].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[0].title}
                repoLink={ProjectsList[0].repoLink}
                description={ProjectsList[0].description}
                techStack={ProjectsList[0].techStack}
                optionalLink={ProjectsList[0].optionalLink}
                projectIcon={ProjectsList[0].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[0].title}
                repoLink={ProjectsList[0].repoLink}
                description={ProjectsList[0].description}
                techStack={ProjectsList[0].techStack}
                optionalLink={ProjectsList[0].optionalLink}
                projectIcon={ProjectsList[0].projectIcon}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;

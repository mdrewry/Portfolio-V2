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
          <Grid className={style.ProjectsGrid} container spacing={6}>
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
                title={ProjectsList[1].title}
                repoLink={ProjectsList[1].repoLink}
                description={ProjectsList[1].description}
                techStack={ProjectsList[1].techStack}
                optionalLink={ProjectsList[1].optionalLink}
                projectIcon={ProjectsList[1].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[2].title}
                repoLink={ProjectsList[2].repoLink}
                description={ProjectsList[2].description}
                techStack={ProjectsList[2].techStack}
                optionalLink={ProjectsList[2].optionalLink}
                projectIcon={ProjectsList[2].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[3].title}
                repoLink={ProjectsList[3].repoLink}
                description={ProjectsList[3].description}
                techStack={ProjectsList[3].techStack}
                optionalLink={ProjectsList[3].optionalLink}
                projectIcon={ProjectsList[3].projectIcon}
              />
            </Grid>
            <Grid className={style.IndividualProject} item xs={4}>
              <Project
                title={ProjectsList[4].title}
                repoLink={ProjectsList[4].repoLink}
                description={ProjectsList[4].description}
                techStack={ProjectsList[4].techStack}
                optionalLink={ProjectsList[4].optionalLink}
                projectIcon={ProjectsList[4].projectIcon}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;

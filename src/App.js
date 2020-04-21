import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import MButton from "@material-ui/core/Button";
import Project from "./Components/Project.js";
import ProjectsList from "./ProjectsList";
function App() {
  const style = useStyles();
  return (
    <div className={style.main}>
      <Typography className={style.WelcomeText}>
        Hello, my name is Mark Drewry. I am currently studying computer science
        at UF.
      </Typography>
      <IconBar />
      <MButton
        variant="contained"
        color="secondary"
        className={style.ProjectButton}
        onClick={() => scroll.scrollToBottom()}
      >
        Projects
      </MButton>
      <Container className={style.ProjectsGridWrapper}>
        <Grid className={style.ProjectsGrid} container spacing={6}>
          {ProjectsList.map((ProjectI) => (
            <Grid
              id={ProjectI.key}
              className={style.IndividualProject}
              item
              xs={12}
              lg={4}
            >
              <Project
                title={ProjectI.title}
                repoLink={ProjectI.repoLink}
                description={ProjectI.description}
                techStack={ProjectI.techStack}
                optionalLink={ProjectI.optionalLink}
                projectIcon={ProjectI.projectIcon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;

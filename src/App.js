import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BrightnessHigh } from "@material-ui/icons";
import {
  Typography,
  Grid,
  Button,
  Container,
  Tooltip,
} from "@material-ui/core";
import { useStyles, theme } from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import Project from "./Components/Project.js";
import ContactForm from "./Components/ContactForm.js";
import ProjectsList from "./ProjectsList";
function App() {
  const style = useStyles();
  const [currentTheme, setCurrentTheme] = useState(theme[0]);
  const [themeIndex, setThemeIndex] = useState(1);
  return (
    <div
      className={style.main}
      style={{ backgroundColor: currentTheme.primary }}
    >
      <div style={{ display: "flex", flexDirection: "row", position: "fixed" }}>
        <Tooltip title="Next Theme">
          <BrightnessHigh
            style={{
              color: currentTheme.highlight,
              fontSize: 40,
              padding: "10px",
            }}
            onClick={() => {
              setThemeIndex((themeIndex + 1) % theme.length);
              setCurrentTheme(theme[themeIndex]);
            }}
          />
        </Tooltip>
        <ContactForm currentTheme={currentTheme} />
        <div style={{ flexGrow: 1 }} />
      </div>
      <Typography
        className={style.WelcomeText}
        style={{ color: currentTheme.textColor }}
      >
        Hello, my name is Mark Drewry. I am currently studying computer science
        at UF.
      </Typography>
      <IconBar currentTheme={currentTheme} />
      <Button
        variant="contained"
        style={{
          backgroundColor: currentTheme.highlight,
          color: currentTheme.textColor,
        }}
        className={style.ProjectButton}
        onClick={() => scroll.scrollToBottom()}
      >
        Projects
      </Button>
      <Container className={style.ProjectsGridWrapper}>
        <Grid className={style.ProjectsGrid} container spacing={8}>
          {ProjectsList.map((ProjectI) => (
            <Grid
              key={ProjectI.key}
              className={style.IndividualProject}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <Project
                currentTheme={currentTheme}
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

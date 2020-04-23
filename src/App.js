import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons";
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
import ProjectsList from "./ProjectsList";
function App() {
  const style = useStyles();
  const [currentTheme, setCurrentTheme] = useState(theme.dark);
  const [darkMode, setDarkMode] = useState(true);
  const themeButton = (selectedMode) => {
    if (selectedMode) {
      setCurrentTheme(theme.light);
    } else setCurrentTheme(theme.dark);

    setDarkMode(!darkMode);
  };
  return (
    <div
      className={style.main}
      style={{ backgroundColor: currentTheme.primary }}
    >
      <div style={{ display: "flex", flexDirection: "row", position: "fixed" }}>
        {darkMode && (
          <Tooltip title="Light Mode">
            <BrightnessLow
              style={{
                color: currentTheme.highlight,
                fontSize: 40,
                margin: "10px",
              }}
              onClick={() => {
                themeButton(darkMode);
              }}
            ></BrightnessLow>
          </Tooltip>
        )}
        {!darkMode && (
          <Tooltip title="Dark Mode">
            <BrightnessHigh
              style={{
                color: currentTheme.highlight,
                fontSize: 40,
                margin: "10px",
              }}
              onClick={() => {
                themeButton(darkMode);
              }}
            ></BrightnessHigh>
          </Tooltip>
        )}
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
        <Grid className={style.ProjectsGrid} container spacing={6}>
          {ProjectsList.map((ProjectI) => (
            <Grid
              id={ProjectI.key}
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

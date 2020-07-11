import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BrightnessHigh } from "@material-ui/icons";
import {
  Typography,
  Grid,
  Button,
  Container,
  Tooltip,
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";
import Particles from "react-particles-js";
import { useStyles, theme } from "./Styles.js";
import IconBar from "./Components/IconBar.js";
import Project from "./Components/Project.js";
import ContactForm from "./Components/ContactForm.js";
import AboutMe from "./Components/AboutMe.js";
import ProjectsList from "./ProjectsList";
import ThemeSelector from "./Components/ThemeSelector";
function App() {
  const style = useStyles();
  const [currentTheme, setCurrentTheme] = useState(theme[0]);
  const [themeIndex, setThemeIndex] = useState(1);
  return (
    <div
      className={style.main}
      style={{ backgroundColor: currentTheme.primary }}
    >
      <Particles
        className={style.particleBackground}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className={style.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <ThemeSelector
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
            themeIndex={themeIndex}
            setThemeIndex={setThemeIndex}
          />
          <AboutMe currentTheme={currentTheme} />
          <ContactForm currentTheme={currentTheme} />
          <div style={{ flexGrow: 1 }} />
        </div>
        <Typography
          className={style.WelcomeText}
          style={{ color: currentTheme.textColor }}
        >
          Hello, my name is Mark Drewry. I am currently studying computer
          science at UF.
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
    </div>
  );
}

export default App;

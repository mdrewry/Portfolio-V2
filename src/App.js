import React, { useState } from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import { themes } from "./Themes";
import { appstyle } from "./Style";
import { Element } from "react-scroll";
import ActionBar from "./Components/ActionBar";
import { projects, experience } from "./Lists";
import Project from "./Components/Project";
import Job from "./Components/Job";
import ContactForm from "./Components/ContactForm";
import TopNav from "./Components/TopNav";
function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[9]);
  const { useStyles, theme } = appstyle(currentTheme);
  const style = useStyles();
  return (
    <div className={style.main}>
      <Particles
        className={style.particleBackground}
        params={{
          particles: {
            number: {
              value: 10,
            },
            size: {
              value: 4,
            },
          },
        }}
      />
      <MuiThemeProvider theme={theme}>
        <div className={style.content}>
          <TopNav
            style={style}
            themes={themes}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <Element name="about" />
          <Container id="about" className={style.section}>
            <Typography className={style.welcomeText}>
              Hello, my name is Mark Drewry. I am currently studying computer
              science at UF.
            </Typography>
            <ActionBar style={style} />
          </Container>
          <Element name="experience" />
          <Container className={style.section}>
            <Grid className={style.ProjectsGrid} container spacing={8}>
              {experience.map((item, index) => (
                <Grid
                  key={index}
                  className={style.IndividualProject}
                  item
                  xs={12}
                >
                  <Job
                    style={style}
                    title={item.title}
                    description={item.description}
                    optionalLink={item.optionalLink}
                    projectIcon={item.projectIcon}
                    links={item.links}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Element name="projects" />
          <Container id="projects" className={style.section}>
            <Grid className={style.ProjectsGrid} container spacing={8}>
              {projects.map((item, index) => (
                <Grid
                  key={index}
                  className={style.IndividualProject}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Project
                    style={style}
                    title={item.title}
                    description={item.description}
                    techStack={item.techStack}
                    optionalLink={item.optionalLink}
                    projectIcon={item.projectIcon}
                    links={item.links}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Element name="contact" />
          <Container id="contact" className={style.section}>
            <ContactForm currentTheme={currentTheme} style={style} />
          </Container>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

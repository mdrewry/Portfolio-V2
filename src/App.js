import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { themes } from "./Themes";
import { appstyle } from "./Style";
import { Element } from "react-scroll";
import ActionBar from "./Components/ActionBar";
import { projects, experience } from "./Lists";
import Project from "./Components/Project";
import Job from "./Components/Job";
import ContactForm from "./Components/ContactForm";
import TopNav from "./Components/TopNav";

function SectionA({ children, style }) {
  return (
    <div className={style.sectionAWrapper}>
      <Container id="about" className={style.section}>
        {children}
      </Container>
    </div>
  );
}
function SectionB({ children, style }) {
  return (
    <div className={style.sectionBWrapper}>
      <Container id="about" className={style.section}>
        {children}
      </Container>
    </div>
  );
}
function StyledCard({ children, style }) {
  return (
    <Card className={style.cardMain} spacing={2}>
      <CardContent className={style.cardContent}>{children}</CardContent>
    </Card>
  );
}

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[9]);
  const { useStyles, theme } = appstyle(currentTheme);
  const style = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={style.main}>
        <TopNav
          style={style}
          themes={themes}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <Element name="about" />
        <SectionA style={style}>
          <StyledCard style={style}>
            <Typography className={style.welcomeText}>
              Hello, my name is Mark Drewry. I am currently studying computer
              science at UF.
            </Typography>
            <ActionBar style={style} />
          </StyledCard>
        </SectionA>
        <Element name="experience" />
        <SectionB style={style}>
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
        </SectionB>
        <Element name="projects" />
        <SectionA style={style}>
          <Grid className={style.ProjectsGrid} container spacing={8}>
            {projects.map((item, index) => (
              <Grid
                key={index}
                className={style.IndividualProject}
                item
                xs={12}
                sm={6}
                md={4}
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
        </SectionA>
        <Element name="contact" />
        <SectionB style={style}>
          <StyledCard style={style}>
            <ContactForm currentTheme={currentTheme} style={style} />
          </StyledCard>
        </SectionB>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

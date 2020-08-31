import React, { useState } from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import { themes } from "./Themes.js";
import ActionBar from "./Components/ActionBar.js";
import ProjectsList from "./ProjectsList";
import Project from "./Components/Project.js";
import TopNav from "./Components/TopNav";
function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const useStyles = makeStyles((theme) => ({
    //main page

    main: {
      textAlign: "center",
      position: "relative",
      backgroundColor: currentTheme.primary,
      minHeight: "200vh",
    },
    particleBackground: {
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "1",
    },
    content: {
      position: "relative",
      zIndex: "10",
    },
    section: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    SubmitButtonWrapper: {
      display: "flex",
      alignItems: "center",
      backgroundColor: currentTheme.secondary,
      padding: "10px",
    },
    welcomeText: {
      fontSize: "25px",
      paddingLeft: "10px",
      paddingRight: "10px",
      color: currentTheme.textColor,
      fontFamily: "Monospace",
    },
    //PageHeader
    pageHeader: {
      display: "flex",
      flexDirection: "row",
      position: "fixed",
      alignItems: "center",
      padding: "10px",
      zIndex: "300",
      backgroundColor: currentTheme.primary,
      borderRadius: "0px 0px 5px 0px",
      borderRight: "solid",
      borderBottom: "solid",
      borderRightColor: currentTheme.highlight,
      borderBottomColor: currentTheme.highlight,
      "&:hover": {
        boxShadow: `1px 1px 10px 3px ${currentTheme.highlight}`,
      },
    },
    headerButton: {
      borderColor: currentTheme.highlight,
      color: currentTheme.textColor,
      [theme.breakpoints.down("sm")]: {
        fontSize: 8,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 10,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
      "&:hover": {
        color: currentTheme.highlight,
      },
    },
    headerButtonMiddleLeft: {
      borderColor: currentTheme.highlight,
      color: currentTheme.textColor,
      [theme.breakpoints.down("sm")]: {
        fontSize: 8,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 10,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
      "&:hover": {
        color: currentTheme.highlight,
      },
      marginLeft: "10px",
      marginRight: "5px",
    },
    headerButtonMiddleRight: {
      borderColor: currentTheme.highlight,
      color: currentTheme.textColor,
      [theme.breakpoints.down("sm")]: {
        fontSize: 8,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 10,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 20,
      },
      "&:hover": {
        color: currentTheme.highlight,
      },
      marginRight: "10px",
      marginLeft: "5px",
    },
    //ThemeSelector
    filler: {
      flexGrow: "1",
    },
    themeSelectorMain: {
      borderRadius: "10px",
      backgroundColor: currentTheme.secondary,
    },
    themeSelectorList: {
      marginTop: "20px",
    },
    themeName: {
      marginRight: "10px",
      color: currentTheme.textColor,
    },
    //AboutMe
    dialogTitle: {
      textAlign: "center",
      fontSize: 30,
      backgroundColor: currentTheme.primary,
      color: currentTheme.textColor,
      border: "solid",
      borderColor: currentTheme.highlight,
      borderBottom: "none",
      fontFamily: "Monospace",
    },
    aboutMeMain: {
      border: "solid",
      backgroundColor: currentTheme.primary,
      borderColor: currentTheme.highlight,
      borderTop: "none",
    },
    //Contact Form
    contactMeMain: {
      backgroundColor: currentTheme.primary,
      border: "solid",
      borderColor: currentTheme.highlight,
    },
    formField: {
      backgroundColor: currentTheme.secondary,
      marginBottom: "10px",
    },
    submitText: {
      color: currentTheme.textColor,
      fontSize: 15,
    },
    submitButton: {
      backgroundColor: currentTheme.highlight,
      color: currentTheme.textColor,
    },
    // ActionBar Stuff
    actionBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignSelf: "center",
      alignItems: "center",
    },
    actionIcon: {
      fontSize: "40px",
      color: currentTheme.highlight,
      "&:hover": {
        fontSize: "80px",
      },
    },

    //Projects Stuff
    projectMain: {
      border: "solid",
      backgroundColor: currentTheme.primary,
      borderColor: currentTheme.highlight,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    projectContent: {
      backgroundColor: currentTheme.secondary,
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
    },
    projectMedia: {
      width: "80px",
      paddingLeft: "80px",
    },
    projectTitle: {
      fontSize: 20,
      color: currentTheme.textColor,
      fontFamily: "Monospace",
    },
    projectDivider: {
      marginTop: "10px",
      marginBottom: "10px",
    },
    projectText: {
      fontSize: 14,
      color: currentTheme.textColor,
    },
    TechStackTitle: {
      marginBottom: "10px",
      textAlign: "center",
    },
    TechStackMain: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    TechStackImage: {
      height: "40px",
      marginLeft: "10px",
    },
    techIconAvatar: {
      width: "40px",
      height: "40px",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
    },
    //Misc
    rowCenter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    flex: {
      display: "flex",
    },
    noUnderlineText: {
      textDecoration: "none",
    },
    textColor: {
      color: currentTheme.textColor,
    },
    backgroundColorHighlight: {
      backgroundColor: currentTheme.highlight,
    },
    backgroundColorSecondary: {
      backgroundColor: currentTheme.secondary,
    },
  }));
  const style = useStyles();
  return (
    <div className={style.main}>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Particles
        className={style.particleBackground}
        params={{
          particles: {
            number: {
              value: 30,
            },
            size: {
              value: 4,
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
        <TopNav
          style={style}
          themes={themes}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <Container className={style.section}>
          <Typography className={style.welcomeText}>
            Hello, my name is Mark Drewry. I am currently studying computer
            science at UF.
          </Typography>
          <ActionBar style={style} />
        </Container>
        <Container className={style.section}>
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
                  style={style}
                  currentTheme={currentTheme}
                  title={ProjectI.title}
                  repoLink={ProjectI.repoLink}
                  description={ProjectI.description}
                  techStack={ProjectI.techStack}
                  optionalLink={ProjectI.optionalLink}
                  projectIcon={ProjectI.projectIcon}
                  links={ProjectI.links}
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

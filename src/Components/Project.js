import React, { useState } from "react";
import { Typography, Avatar, Paper, Tooltip } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TechStack from "./TechStack.js";
import { useStyles } from "../Styles.js";
function Project(props) {
  const [elevation, setElevation] = useState(1);
  const style = useStyles();
  const title = props.title;
  const repoLink = props.repoLink;
  const description = props.description;
  const techStack = props.techStack;
  const projectIcon = props.projectIcon;
  const setHighlight = (colorSelector) => {
    if (colorSelector === true) {
      setElevation(10);
    } else {
      setElevation(1);
    }
  };
  const theme = createMuiTheme();
  theme.shadows[10] = `0px 0px 15px 1px ${props.currentTheme.highlight}`;
  return (
    <MuiThemeProvider theme={theme}>
      <a href={repoLink} style={{ textDecoration: "none" }}>
        <Tooltip title="Visit Github">
          <Paper
            elevation={elevation}
            className={style.ProjectMain}
            style={{
              backgroundColor: props.currentTheme.primary,
              borderColor: props.currentTheme.highlight,
            }}
            spacing={2}
            onMouseEnter={() => setHighlight(true)}
            onMouseLeave={() => setHighlight(false)}
          >
            <Paper
              className={style.CardHeader}
              style={{
                backgroundColor: props.currentTheme.secondary,
              }}
            >
              <Typography
                className={style.ProjectTitle}
                style={{
                  color: props.currentTheme.textColor,
                  fontFamily: "Monospace",
                }}
              >
                {title}
              </Typography>
              <Avatar
                style={{
                  width: "80px",
                  height: "80px",
                }}
                variant="rounded"
              >
                <img
                  className={style.ProjectImage}
                  alt=""
                  src={projectIcon}
                ></img>
              </Avatar>
            </Paper>
            <Paper
              className={style.ProjectInformation}
              style={{
                backgroundColor: props.currentTheme.secondary,
                marginTop: "10px",
                padding: "15px",
              }}
            >
              <Typography
                className={style.ProjectText}
                style={{ color: props.currentTheme.textColor }}
              >
                {description}
              </Typography>
              <TechStack
                techStackIcons={techStack}
                currentTheme={props.currentTheme}
              />
            </Paper>
          </Paper>
        </Tooltip>
      </a>
    </MuiThemeProvider>
  );
}

export default Project;

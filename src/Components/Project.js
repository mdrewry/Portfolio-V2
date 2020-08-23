import React, { useState } from "react";
import {
  Typography,
  Avatar,
  Paper,
  Tooltip,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Box,
  Divider,
} from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TechStack from "./TechStack.js";
function Project({
  style,
  currentTheme,
  title,
  repoLink,
  description,
  techStack,
  optionalLink,
  projectIcon,
}) {
  const [elevation, setElevation] = useState(1);
  const setHighlight = (colorSelector) => {
    if (colorSelector === true) {
      setElevation(10);
    } else {
      setElevation(1);
    }
  };
  const theme = createMuiTheme();
  theme.shadows[10] = `0px 0px 15px 1px ${currentTheme.highlight}`;
  return (
    <MuiThemeProvider theme={theme}>
      <a href={repoLink} style={{ textDecoration: "none" }}>
        <Tooltip title="Visit Github">
          <Card
            elevation={elevation}
            className={style.projectMain}
            spacing={2}
            onMouseEnter={() => setHighlight(true)}
            onMouseLeave={() => setHighlight(false)}
          >
            <CardMedia className={style.projectMedia} image={projectIcon} />
            <CardContent className={style.projectContent}>
              <Typography className={style.projectTitle}>{title}</Typography>
              <Divider className={style.projectDivider} />
              <Typography className={style.projectText}>
                {description}
              </Typography>
              <div className={style.filler} />

              <TechStack techStackIcons={techStack} style={style} />
            </CardContent>
          </Card>
        </Tooltip>
      </a>
    </MuiThemeProvider>
  );
}

export default Project;

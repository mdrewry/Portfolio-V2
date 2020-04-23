import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Paper,
  Tooltip,
} from "@material-ui/core/";
import { GitHub } from "@material-ui/icons";
import TechStack from "./TechStack.js";
import { useStyles } from "../Styles.js";
function Project(props) {
  const [elevation, setElevation] = useState(1);
  const [hover, setHover] = useState("hidden");
  const style = useStyles();
  const title = props.title;
  const repoLink = props.repoLink;
  const description = props.description;
  const techStack = props.techStack;
  const projectIcon = props.projectIcon;
  const setHighlight = (colorSelector) => {
    if (colorSelector == true) {
      setHover("visible");
      setElevation(24);
    } else {
      setHover("hidden");
      setElevation(1);
    }
  };
  return (
    <a href={repoLink} style={{ textDecoration: "none" }}>
      <Paper elevation={elevation}>
        <Card
          className={style.ProjectMain}
          style={{
            backgroundColor: props.currentTheme.primary,
            border: "double",
            borderColor: props.currentTheme.highlight,
          }}
          spacing={2}
          onMouseEnter={() => setHighlight(true)}
          onMouseLeave={() => setHighlight(false)}
        >
          <div className={style.CardHeader}>
            <Typography
              className={style.ProjectTitle}
              style={{ color: props.currentTheme.textColor }}
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
              <img className={style.ProjectImage} src={projectIcon}></img>
            </Avatar>
          </div>
          <CardContent className={style.ProjectInformation}>
            <Typography
              className={style.ProjectText}
              style={{ color: props.currentTheme.textColor }}
            >
              {description}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <Paper
              style={{
                backgroundColor: props.currentTheme.secondary,
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <Typography
                className={style.TechStackTitle}
                style={{ color: props.currentTheme.textColor }}
              >
                Created With
              </Typography>
              <TechStack
                techStackIcons={techStack}
                currentTheme={props.currentTheme}
              />
            </Paper>
          </CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ flexGrow: 1 }}></div>
            <Tooltip title={"Visit Repository"}>
              <GitHub visibility={hover} />
            </Tooltip>
          </div>
        </Card>
      </Paper>
    </a>
  );
}

export default Project;

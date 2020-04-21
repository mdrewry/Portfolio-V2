import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Paper,
  Tooltip,
} from "@material-ui/core/";
import TechStack from "./TechStack.js";
import useStyles from "../Styles.js";
function Project(props) {
  const colorH = "#54568f";
  const colorUH = "#222831";
  const [colorMain, setColor] = useState(colorUH);
  const style = useStyles();
  const title = props.title;
  const repoLink = props.repoLink;
  const description = props.description;
  const techStack = props.techStack;
  const projectIcon = props.projectIcon;
  const setHighlight = (colorSelector) => {
    if (colorSelector == true) {
      setColor(colorH);
    } else setColor(colorUH);
  };
  return (
    <a href={repoLink} style={{ textDecoration: "none" }}>
      <Tooltip title={"Visit Repository"}>
        <Card
          className={style.ProjectMain}
          style={{ backgroundColor: colorMain }}
          spacing={2}
          onMouseEnter={() => setHighlight(true)}
          onMouseLeave={() => setHighlight(false)}
        >
          <div className={style.CardHeader}>
            <Typography className={style.ProjectTitle}>{title}</Typography>
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
            <Typography className={style.ProjectText}>{description}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Paper
              style={{
                backgroundColor: "#4a505a",
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <Typography className={style.TechStackTitle}>
                Created With
              </Typography>
              <TechStack techStackIcons={techStack} />
            </Paper>
          </CardContent>
        </Card>
      </Tooltip>
    </a>
  );
}

export default Project;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core/";
import TechStack from "./TechStack.js";
import useStyles from "../Styles.js";
function Project(props) {
  const style = useStyles();
  const title = props.title;
  const repoLink = props.repoLink;
  const description = props.description;
  const techStack = props.techStack;
  const optionalLink = props.optionalLink;
  const projectIcon = props.projectIcon;
  const visitRepo = (e) => {
    window.location = repoLink;
  };
  return (
    <Card
      className={style.ProjectMain}
      style={{ backgroundColor: "#222831" }}
      spacing={2}
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
          <Typography className={style.TechStackTitle}>Tech Stack</Typography>
          <TechStack techStackIcons={techStack} />
        </Paper>
      </CardContent>
    </Card>
  );
}

export default Project;

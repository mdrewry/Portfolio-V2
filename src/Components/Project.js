import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";
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
      spacing={2}
      style={{
        backgroundColor: "#222831",
      }}
    >
      <CardContent>
        <div className={style.ProjectInformation}>
          <Typography className={style.ProjectText}>{title}</Typography>
          <br />
          <Typography className={style.ProjectText}>{description}</Typography>
        </div>
      </CardContent>
      <CardContent>
        <div className={style.ProjectVisuals}>
          <img className={style.ProjectImage} src={projectIcon}></img>
          <TechStack techStackIcons={techStack} />
        </div>
      </CardContent>
    </Card>
  );
}

export default Project;

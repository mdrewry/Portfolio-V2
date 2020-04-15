import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
    <div>
      <Grid className={style.ProjectMain} container spacing={2}>
        <Grid item xs={7}>
          <div className={style.ProjectInformation}>
            <Typography className={style.ProjectText}>{title}</Typography>
            <br />
            <Typography className={style.ProjectText}>{description}</Typography>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={style.ProjectInformation}>
            <img className={style.ProjectImage} src={projectIcon}></img>
            <TechStack techStackIcons={techStack} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;

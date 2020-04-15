import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "../Styles.js";
function Project(props) {
  const style = useStyles();
  const title = props.title;
  const repoLink = props.repoLink;
  const desription = props.repoLink;
  const techStack = props.techStack;
  const optionalLink = props.optionalLink;
  const visitRepo = (e) => {
    window.location = repoLink;
  };
  return (
    <div className={style.ProjectMain}>
      <Typography>repoLink</Typography>
    </div>
  );
}

export default Project;

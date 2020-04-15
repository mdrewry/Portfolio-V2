import React from "react";
import useStyles from "../../Styles.js";
function TechIcon(props) {
  const style = useStyles();
  const path = props.path;
  return (
    <div>
      <img className={style.IconImage} src={path}></img>
    </div>
  );
}

export default TechIcon;

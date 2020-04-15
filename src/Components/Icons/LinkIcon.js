import React from "react";
import useStyles from "../../Styles.js";
function LinkIcon(props) {
  const style = useStyles();
  const link = props.link;
  const path = props.path;
  return (
    <div>
      <a href={link}>
        <img className={style.IconImage} src={path}></img>
      </a>
    </div>
  );
}

export default LinkIcon;

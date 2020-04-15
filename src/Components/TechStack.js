import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "../Styles.js";
function TechStack(props) {
  const style = useStyles();
  const [techIcons, setTechIcons] = useState(props.techStackIcons);
  return (
    <div className={style.TechStackMainWrapper}>
      <div className={style.TechStackMain}>
        {techIcons.map((techIcon) => (
          <img
            key={techIcon.key}
            className={style.TechStackImage}
            src={techIcon.path}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default TechStack;

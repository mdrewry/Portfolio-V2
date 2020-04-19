import React, { useState } from "react";
import useStyles from "../Styles.js";
function TechStack(props) {
  const style = useStyles();
  const [techIcons, setTechIcons] = useState(props.techStackIcons);
  return (
    <div className={style.TechStackMain}>
      {techIcons.map((techIcon) => (
        <img
          key={techIcon.key}
          className={style.TechStackImage}
          src={techIcon.path}
        ></img>
      ))}
    </div>
  );
}

export default TechStack;

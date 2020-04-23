import React, { useState } from "react";
import { Avatar, Tooltip } from "@material-ui/core/";
import { useStyles } from "../Styles.js";
function TechStack(props) {
  const style = useStyles();
  const [techIcons, setTechIcons] = useState(props.techStackIcons);
  return (
    <div className={style.TechStackMain}>
      {techIcons.map((techIcon) => (
        <Tooltip title={techIcon.name} key={techIcon.key}>
          <Avatar
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#FFFFFF",
              textAlign: "center",
            }}
            src={techIcon.path}
          ></Avatar>
        </Tooltip>
      ))}
    </div>
  );
}

export default TechStack;

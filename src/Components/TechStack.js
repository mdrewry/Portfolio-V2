import React from "react";
import { Avatar, Tooltip } from "@material-ui/core/";
function TechStack({ techStackIcons, style }) {
  return (
    <div className={style.TechStackMain}>
      {techStackIcons.map((techIcon) => (
        <Tooltip title={techIcon.name} key={techIcon.key}>
          <Avatar className={style.techIconAvatar} src={techIcon.path}></Avatar>
        </Tooltip>
      ))}
    </div>
  );
}

export default TechStack;

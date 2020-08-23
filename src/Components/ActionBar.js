import React from "react";
import { Description, GitHub, LinkedIn } from "@material-ui/icons";
import { Tooltip, IconButton } from "@material-ui/core";
function IconBar({ style }) {
  const gitLink = "https://github.com/mdrewry";
  const linkedInLink = "https://www.linkedin.com/in/mark-drewry-242850195/";
  // const setClipboard = (e) => {
  //   const text = document.createElement("textarea");
  //   text.innerText = "mdrewry0@gmail.com";
  //   document.body.appendChild(text);
  //   text.select();
  //   document.execCommand("copy");
  //   text.remove();
  // };
  return (
    <div className={style.actionBar}>
      <a href={gitLink}>
        <Tooltip title="Github">
          <IconButton>
            <GitHub className={style.actionIcon} />
          </IconButton>
        </Tooltip>
      </a>
      <a href={"Resume.pdf"} target="blank">
        <Tooltip title="Open Resume">
          <IconButton>
            <Description className={style.actionIcon} />
          </IconButton>
        </Tooltip>
      </a>
      <a href={linkedInLink}>
        <Tooltip title="LinkedIn">
          <IconButton>
            <LinkedIn className={style.actionIcon} />
          </IconButton>
        </Tooltip>
      </a>
    </div>
  );
}

export default IconBar;

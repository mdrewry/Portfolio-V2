import React from "react";
import { AccountBox, GitHub, LinkedIn } from "@material-ui/icons";
import { useStyles } from "../Styles.js";
import Tooltip from "@material-ui/core/Tooltip";

function IconBar(props) {
  const style = useStyles();
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
    <div className={style.IconBarMainWrapper}>
      <div className={style.IconBarMain}>
        <a href={gitLink}>
          <Tooltip title="Github">
            <GitHub
              className={style.IconImage}
              style={{ color: props.currentTheme.highlight }}
            ></GitHub>
          </Tooltip>
        </a>
        <a href={"Resume.pdf"} target="blank">
          <Tooltip title="Open Resume">
            <AccountBox
              className={style.IconImage}
              fontSize="large"
              style={{ color: props.currentTheme.highlight }}
            ></AccountBox>
          </Tooltip>
        </a>
        <a href={linkedInLink}>
          <Tooltip title="LinkedIn">
            <LinkedIn
              className={style.IconImage}
              style={{ color: props.currentTheme.highlight }}
            ></LinkedIn>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default IconBar;

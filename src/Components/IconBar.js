import React from "react";
import { Description, GitHub, LinkedIn } from "@material-ui/icons";
import { useStyles } from "../Styles.js";
import { Tooltip, IconButton } from "@material-ui/core";

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
            <IconButton>
              <GitHub
                className={style.IconImage}
                style={{ color: props.currentTheme.highlight }}
              />
            </IconButton>
          </Tooltip>
        </a>
        <a href={"Resume.pdf"} target="blank">
          <Tooltip title="Open Resume">
            <IconButton>
              <Description
                className={style.IconImage}
                fontSize="large"
                style={{ color: props.currentTheme.highlight }}
              />
            </IconButton>
          </Tooltip>
        </a>
        <a href={linkedInLink}>
          <Tooltip title="LinkedIn">
            <IconButton>
              <LinkedIn
                className={style.IconImage}
                style={{ color: props.currentTheme.highlight }}
              />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default IconBar;

import React from "react";
import useStyles from "../Styles.js";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Twitter,
  Email,
  AccountBox,
  GitHub,
  LinkedIn,
} from "@material-ui/icons";
function IconBar() {
  const style = useStyles();
  const gitLink = "https://github.com/mdrewry";
  const linkedInLink = "https://www.linkedin.com/in/mark-drewry-242850195/";
  const twitterLink = "https://www.linkedin.com/in/mark-drewry-242850195/";
  const setClipboard = (e) => {
    const text = document.createElement("textarea");
    text.innerText = "mdrewry0@gmail.com";
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
  };
  return (
    <div className={style.IconBarMainWrapper}>
      <div className={style.IconBarMain}>
        <a href={""}>
          <Tooltip title="Copy Email">
            <Email
              className={style.IconImage}
              onClick={(e) => setClipboard()}
            ></Email>
          </Tooltip>
        </a>
        <a href={twitterLink}>
          <Tooltip title="Twitter">
            <Twitter className={style.IconImage}></Twitter>
          </Tooltip>
        </a>
        <a href={"Resume.pdf"} target="blank">
          <Tooltip title="Download Resume">
            <AccountBox className={style.IconImage}></AccountBox>
          </Tooltip>
        </a>
        <a href={gitLink}>
          <Tooltip title="Github">
            <GitHub className={style.IconImage}></GitHub>
          </Tooltip>
        </a>
        <a href={linkedInLink}>
          <Tooltip title="LinkedIn">
            <LinkedIn className={style.IconImage}></LinkedIn>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

export default IconBar;

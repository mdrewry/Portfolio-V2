import React from "react";
import useStyles from "../../Styles.js";
import ResumeIconI from "../../Res/ResumeIcon.png";
function ResumeIcon() {
  const style = useStyles();
  return (
    <div>
      <a href={"Resume.pdf"} target="blank">
        <img className={style.IconImage} src={ResumeIconI}></img>
      </a>
    </div>
  );
}

export default ResumeIcon;

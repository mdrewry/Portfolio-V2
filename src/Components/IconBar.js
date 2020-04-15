import React, { useState } from "react";
import useStyles from "../Styles.js";
import LinkIcon from "./Icons/LinkIcon";
import GitIcon from "../Res/gitHub.png";
import LinkedInIcon from "../Res/LinkedInIcon.png";
import TwitterIcon from "../Res/TwitterIcon.webp";
import EmailIcon from "./Icons/EmailIcon";
import ResumeIcon from "./Icons/ResumeIcon";
function IconBar() {
  const style = useStyles();
  const [icons, setIcons] = useState([
    {
      path: GitIcon,
      link: "https://github.com/mdrewry",
      key: "1",
    },
    {
      path: LinkedInIcon,
      link: "https://www.linkedin.com/in/mark-drewry-242850195/",
      key: "2",
    },
    {
      path: TwitterIcon,
      link: "https://www.linkedin.com/in/mark-drewry-242850195/",
      key: "3",
    },
  ]);
  return (
    <div className={style.IconBarMainWrapper}>
      <div className={style.IconBarMain}>
        {icons.map((IconInfo) => (
          <div key={IconInfo.key}>
            <LinkIcon path={IconInfo.path} link={IconInfo.link}></LinkIcon>
          </div>
        ))}
        <EmailIcon />
        <ResumeIcon />
      </div>
    </div>
  );
}

export default IconBar;

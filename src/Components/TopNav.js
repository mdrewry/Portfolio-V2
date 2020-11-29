import React from "react";
import { scroller } from "react-scroll";
import { IconButton, Tooltip } from "@material-ui/core";
import { AccountCircle, Work, Email, Code } from "@material-ui/icons";
import ThemeSelector from "./ThemeSelector";
const TopNav = ({ style, themes, setCurrentTheme }) => {
  const handleScroll = (location) => {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className={style.pageHeader}>
      <ThemeSelector
        themes={themes}
        setCurrentTheme={setCurrentTheme}
        style={style}
      />
      <div className={style.nav_spacer}>
        <Tooltip title="About">
          <IconButton
            variant="outlined"
            className={style.headerButton}
            onClick={() => handleScroll("about")}
          >
            <AccountCircle className={style.nav_icon} />
          </IconButton>
        </Tooltip>
      </div>
      <div className={style.nav_spacer}>
        <Tooltip title="Experience">
          <IconButton
            variant="outlined"
            className={style.headerButton}
            onClick={() => handleScroll("experience")}
          >
            <Work className={style.nav_icon} />
          </IconButton>
        </Tooltip>
      </div>
      <div className={style.nav_spacer}>
        <Tooltip title="Projects">
          <IconButton
            variant="outlined"
            className={style.headerButton}
            onClick={() => handleScroll("projects")}
          >
            <Code className={style.nav_icon} />
          </IconButton>
        </Tooltip>
      </div>
      <div className={style.nav_spacer}>
        <Tooltip title="Contact Me">
          <IconButton
            variant="outlined"
            className={style.headerButton}
            onClick={() => handleScroll("contact")}
          >
            <Email className={style.nav_icon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default TopNav;

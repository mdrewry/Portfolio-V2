import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "@material-ui/core";
import ContactForm from "./ContactForm.js";
import AboutMe from "./AboutMe.js";
import ThemeSelector from "./ThemeSelector";
const TopNav = ({ style, themes, currentTheme, setCurrentTheme }) => {
  return (
    <div className={style.pageHeader}>
      <ThemeSelector
        themes={themes}
        setCurrentTheme={setCurrentTheme}
        style={style}
      />
      <AboutMe style={style} />
      <ContactForm currentTheme={currentTheme} style={style} />
      <Button
        variant="outlined"
        className={style.headerButton}
        onClick={() => scroll.scrollToBottom()}
      >
        Projects
      </Button>
      <div className={style.filler} />
    </div>
  );
};

export default TopNav;

import React, { useState, useRef, Fragment } from "react";
import {
  Button,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Typography,
} from "@material-ui/core";
import ProjectsList from "../ProjectsList";
import Project from "./Project";
const Projects = ({ style, currentTheme }) => {
  const [openProjects, setOpenProjects] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = React.useRef(openProjects);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenProjects(false);
  };
  React.useEffect(() => {
    if (prevOpen.current === true && openProjects === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openProjects;
  }, [openProjects]);

  return (
    <Fragment>
      <Button
        ref={anchorRef}
        className={style.headerButton}
        variant="outlined"
        onClick={() => {
          setOpenProjects((prevOpen) => !prevOpen);
        }}
      >
        Projects
      </Button>
      <Popper
        open={openProjects}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={style.themeSelectorMain}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={style.projectSelectorList}
                  autoFocusItem={openProjects}
                  id="menu-list-grow"
                >
                  {ProjectsList.map((p, i) => (
                    <MenuItem
                      key={i}
                      onClick={(event) => {
                        if (
                          anchorRef.current &&
                          anchorRef.current.contains(event.target)
                        ) {
                          return;
                        }
                        setOpenProjects(false);
                      }}
                    >
                      <Project
                        style={style}
                        currentTheme={currentTheme}
                        title={p.title}
                        repoLink={p.repoLink}
                        description={p.description}
                        techStack={p.techStack}
                        optionalLink={p.optionalLink}
                        projectIcon={p.projectIcon}
                      />
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};
export default Projects;

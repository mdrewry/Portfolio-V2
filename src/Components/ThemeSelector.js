import React, { useState, useRef, Fragment, useEffect } from "react";
import { FiberManualRecord, Palette } from "@material-ui/icons";
import {
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Typography,
  Tooltip,
} from "@material-ui/core";

const ThemeSelector = ({ themes, setCurrentTheme, style }) => {
  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = useRef(openThemeSelector);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenThemeSelector(false);
  };
  useEffect(() => {
    if (prevOpen.current === true && openThemeSelector === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openThemeSelector;
  }, [openThemeSelector]);

  return (
    <Fragment>
      <div className={style.nav_spacer}>
        <Tooltip title="Select Theme">
          <IconButton
            ref={anchorRef}
            className={style.headerButton}
            variant="outlined"
            onClick={() => {
              setOpenThemeSelector((prevOpen) => !prevOpen);
            }}
          >
            <Palette className={style.nav_icon} />
          </IconButton>
        </Tooltip>
      </div>
      <Popper
        open={openThemeSelector}
        anchorEl={anchorRef.current}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
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
                  className={style.themeSelectorList}
                  autoFocusItem={openThemeSelector}
                  id="menu-list-grow"
                >
                  {themes.map((t, i) => (
                    <MenuItem
                      key={i}
                      onClick={(event) => {
                        if (
                          anchorRef.current &&
                          anchorRef.current.contains(event.target)
                        ) {
                          return;
                        }
                        setCurrentTheme(themes[t.key]);
                        setOpenThemeSelector(false);
                      }}
                      style={{
                        display: "flex",
                      }}
                    >
                      <Typography className={style.themeName}>
                        {t.name}
                      </Typography>
                      <div className={style.filler} />
                      <div
                        style={{
                          backgroundColor: t.textColor,
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "10px",
                          border: "2px",
                          borderStyle: "solid",
                          borderColor: t.highlight,
                        }}
                      >
                        <FiberManualRecord
                          style={{
                            color: t.primary,
                          }}
                        />
                        <FiberManualRecord
                          style={{ color: t.secondary, borderColor: "#FFFFFF" }}
                        />
                        <FiberManualRecord
                          style={{ color: t.highlight, borderColor: "#FFFFFF" }}
                        />
                      </div>
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
export default ThemeSelector;

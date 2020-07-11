import React, { useState, useRef, Fragment } from "react";
import { BrightnessHigh, FiberManualRecord } from "@material-ui/icons";
import {
  Typography,
  Grid,
  Button,
  Container,
  Tooltip,
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
} from "@material-ui/core";
import { useStyles, theme } from "../Styles.js";
const ThemeSelector = ({
  currentTheme,
  themeIndex,
  setThemeIndex,
  setCurrentTheme,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const prevOpen = React.useRef(open);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Fragment>
      <Tooltip title="Themes">
        <IconButton>
          <BrightnessHigh
            ref={anchorRef}
            style={{
              color: currentTheme.highlight,
              fontSize: 40,
            }}
            onClick={() => {
              setOpen((prevOpen) => !prevOpen);
            }}
          />
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
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
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  style={{ marginTop: "10px" }}
                  autoFocusItem={open}
                  id="menu-list-grow"
                >
                  {theme.map((t) => (
                    <MenuItem
                      onClick={(event) => {
                        if (
                          anchorRef.current &&
                          anchorRef.current.contains(event.target)
                        ) {
                          return;
                        }
                        setThemeIndex(t.key);
                        setCurrentTheme(theme[t.key]);
                        setOpen(false);
                      }}
                      style={{ display: "flex" }}
                    >
                      <FiberManualRecord style={{ color: t.primary }} />
                      <FiberManualRecord style={{ color: t.secondary }} />
                      <FiberManualRecord style={{ color: t.highlight }} />
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

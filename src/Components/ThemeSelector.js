import React, { useState, useRef, Fragment } from "react";
import { BrightnessHigh, FiberManualRecord } from "@material-ui/icons";
import {
  Tooltip,
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Typography,
} from "@material-ui/core";
import { theme, useStyles } from "../Styles.js";
const ThemeSelector = ({ currentTheme, setThemeIndex, setCurrentTheme }) => {
  const style = useStyles();
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
        <IconButton
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <BrightnessHigh
            ref={anchorRef}
            style={{
              color: currentTheme.highlight,
              fontSize: 40,
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
            <Paper
              style={{
                borderRadius: "10px",
                backgroundColor: currentTheme.secondary,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  style={{
                    marginTop: "10px",
                  }}
                  autoFocusItem={open}
                  id="menu-list-grow"
                >
                  {theme.map((t, i) => (
                    <MenuItem
                      key={i}
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
                      style={{
                        display: "flex",
                      }}
                    >
                      <Typography
                        style={{
                          marginRight: "10px",
                          color: currentTheme.textColor,
                        }}
                      >
                        {t.name}
                      </Typography>
                      <div className={style.Filler} />
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

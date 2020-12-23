import React, { useState, useRef, Fragment, useEffect } from "react";
import { SupervisorAccount } from "@material-ui/icons";
import {
  IconButton,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import nelsonicon from "../Res/nelsonicon.png";
import juanicon from "../Res/juanicon.png";
import rohanicon from "../Res/rohanicon.png";
import andreaicon from "../Res/andreaicon.png";
const Peers = ({ style }) => {
  const [openPeers, setOpenPeers] = useState(false);
  const peers = [
    {
      name: "Andrea Relova",
      avatar: andreaicon,
      url: "http://andrearelova.com",
    },
    { name: "Juan Torres", avatar: juanicon, url: "http://torresjuan.com" },
    {
      name: "Nelson Reina",
      avatar: nelsonicon,
      url: "http://reinanelson.com",
    },
    {
      name: "Rohan Samatha",
      avatar: rohanicon,
      url: "http://rohansamanta.com",
    },
  ];
  const anchorRef = useRef(null);
  const prevOpen = useRef(openPeers);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPeers(false);
  };
  useEffect(() => {
    if (prevOpen.current === true && openPeers === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = openPeers;
  }, [openPeers]);
  return (
    <Fragment>
      <div className={style.nav_spacer}>
        <IconButton
          ref={anchorRef}
          className={style.headerButton}
          variant="outlined"
          onClick={() => {
            setOpenPeers((prevOpen) => !prevOpen);
          }}
        >
          <SupervisorAccount className={style.nav_icon} />
        </IconButton>
      </div>
      <Popper
        open={openPeers}
        anchorEl={anchorRef.current}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
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
            <Paper className={style.peerMain}>
              <div className={style.peerTitleWrapper}>
                <Typography className={style.peerTitle}>
                  Some Friends Of Mine
                </Typography>
              </div>

              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className={style.themeSelectorList}
                  autoFocusItem={openPeers}
                  id="menu-list-grow"
                >
                  {peers.map((peer, i) => (
                    <a
                      className={style.noUnderlineText}
                      key={i}
                      target="blank"
                      href={peer.url}
                    >
                      <MenuItem
                        onClick={(event) => {
                          if (
                            anchorRef.current &&
                            anchorRef.current.contains(event.target)
                          ) {
                            return;
                          }
                          setOpenPeers(false);
                        }}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Avatar
                          className={style.peerAvatar}
                          src={peer.avatar}
                        />
                        <div className={style.filler} />
                        <Typography className={style.peerText}>
                          {peer.name}
                        </Typography>
                      </MenuItem>
                    </a>
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
export default Peers;

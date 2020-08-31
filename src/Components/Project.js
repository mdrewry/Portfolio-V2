import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Tooltip,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  MenuItem,
  Menu,
} from "@material-ui/core/";
import { FolderOpen, GitHub, Shop, Code, Link } from "@material-ui/icons";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TechStack from "./TechStack.js";
const MenuButton = ({ label }) => {
  if (label === "Github") return <GitHub />;
  else if (label === "DevPost") return <Code />;
  else if (label === "Google Play Store") return <Shop />;
  else return <Link />;
};

function Project({
  style,
  currentTheme,
  title,
  repoLink,
  description,
  techStack,
  links,
  projectIcon,
}) {
  const [elevation, setElevation] = useState(1);
  const setHighlight = (colorSelector) => {
    if (colorSelector) {
      setElevation(10);
    } else {
      setElevation(1);
    }
  };
  const theme = createMuiTheme();
  theme.shadows[10] = `0px 0px 15px 1px ${currentTheme.highlight}`;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Card
        elevation={elevation}
        className={style.projectMain}
        spacing={2}
        onMouseEnter={() => setHighlight(true)}
        onMouseLeave={() => setHighlight(false)}
      >
        <CardMedia className={style.projectMedia} image={projectIcon} />
        <CardContent className={style.projectContent}>
          <div className={style.rowCenter}>
            <IconButton onClick={handleClick}>
              <FolderOpen />
            </IconButton>

            <Menu
              className={style.themeSelectorList}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {links.map((l, i) => (
                <MenuItem key={i} onClick={handleClose}>
                  <Tooltip title={l.label}>
                    <a
                      target="none"
                      href={l.link}
                      className={style.noUnderlineText}
                    >
                      <MenuButton label={l.label} />
                    </a>
                  </Tooltip>
                </MenuItem>
              ))}
            </Menu>

            <Typography className={style.projectTitle}>{title}</Typography>
          </div>
          <Divider className={style.projectDivider} />
          <Typography className={style.projectText}>{description}</Typography>
          <div className={style.filler} />
          <TechStack techStackIcons={techStack} style={style} />
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
}

export default Project;

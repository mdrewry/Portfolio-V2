import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core/";
import {
  MoreVert,
  GitHub,
  Shop,
  Code,
  Link,
  LinkedIn,
} from "@material-ui/icons";

const LinkButton = ({ label, style }) => {
  if (label === "Github") return <GitHub className={style.projectLinkIcon} />;
  else if (label === "DevPost")
    return <Code className={style.projectLinkIcon} />;
  else if (label === "Play Store")
    return <Shop className={style.projectLinkIcon} />;
  else if (label === "Project Owner")
    return <LinkedIn className={style.projectLinkIcon} />;
  else return <Link className={style.projectLinkIcon} />;
};

function Job({ style, title, description, links, projectIcon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  return (
    <Card className={style.projectMain} spacing={2}>
      <CardMedia className={style.projectMedia} image={projectIcon} />
      <CardContent className={style.projectContent}>
        <div className={style.rowCenter}>
          <IconButton onClick={handleClick} ref={anchorEl}>
            <MoreVert className={style.projectLinkIcon} />
          </IconButton>
          <Menu
            className={style.themeSelectorList}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {links.map((l, i) => (
              <a
                target="none"
                href={l.link}
                className={style.noUnderlineText}
                key={i}
              >
                <MenuItem className={style.rowCenter} onClick={handleClose}>
                  <LinkButton label={l.label} style={style} />
                  <Typography className={style.projectLinkText}>
                    {l.label}
                  </Typography>
                </MenuItem>
              </a>
            ))}
          </Menu>
          <Typography className={style.projectTitle}>{title}</Typography>
        </div>
        <Divider className={style.projectDivider} />
        <Typography className={style.projectText}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Job;

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  Typography,
  Paper,
  Link,
  Button,
} from "@material-ui/core/";

import { useStyles } from "../Styles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AboutMe = (props) => {
  const style = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        onClick={(e) => e.preventDefault()}
      >
        <Button
          variant="outlined"
          style={{
            borderColor: props.currentTheme.highlight,
            color: props.currentTheme.textColor,
            fontSize: 20,
            marginLeft: "10px",
            marginRight: "10px",
          }}
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          About Me
        </Button>
      </Link>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{ margin: "10px" }}
      >
        <DialogContent
          className={style.ContactFormMain}
          style={{
            backgroundColor: props.currentTheme.primary,
            borderColor: props.currentTheme.highlight,
          }}
        >
          <Paper
            style={{
              backgroundColor: props.currentTheme.secondary,
              padding: "10px",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                textDecorationColor: props.currentTheme.highlight,
                color: props.currentTheme.textColor,
                fontSize: 30,
              }}
            >
              About Me
            </Typography>
            <Typography
              style={{
                marginTop: "10px",
                color: props.currentTheme.textColor,
                textAlign: "center",
              }}
            >
              I am a 20 year old student currently studying computer science at
              the University of Florida. My interest in computer science began
              freshmen year of high school when I took my first course, Object
              Oriented Programming Honors. My teacher, Mrs. Slutsky was
              passionate about the subject and encouraged my peers and I through
              projects and engaging conceptual exercises. Currently I am
              interested in learning more about javascript and web development.
            </Typography>
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutMe;

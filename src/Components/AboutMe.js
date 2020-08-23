import React, { useState, Fragment } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
  Link,
  Button,
} from "@material-ui/core/";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AboutMe = ({ style }) => {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const handleClose = () => {
    setOpenAboutMe(false);
  };
  return (
    <Fragment>
      <Button
        variant="outlined"
        className={style.headerButtonMiddleLeft}
        onClick={(e) => {
          e.preventDefault();
          setOpenAboutMe(true);
        }}
      >
        About Me
      </Button>
      <Dialog
        open={openAboutMe}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle disableTypography={true} className={style.dialogTitle}>
          About Me
        </DialogTitle>
        <DialogContent className={style.aboutMeMain}>
          <DialogContentText className={style.textColor}>
            I am a 20 year old student currently studying computer science at
            the University of Florida. My interest in computer science began
            freshmen year of high school when I took my first course, Object
            Oriented Programming Honors. My teacher, Mrs. Slutsky was passionate
            about the subject and encouraged my peers and I through projects and
            engaging conceptual exercises. Currently I am interested in learning
            more about javascript and web development.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default AboutMe;

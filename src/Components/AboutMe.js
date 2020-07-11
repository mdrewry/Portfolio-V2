import React, { useState } from "react";
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

const AboutMe = (props) => {
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
            fontSize: 15,
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
      >
        <DialogTitle
          disableTypography={true}
          style={{
            textAlign: "center",
            fontSize: 30,
            backgroundColor: props.currentTheme.primary,
            color: props.currentTheme.textColor,
            border: "solid",
            borderColor: props.currentTheme.highlight,
            borderBottom: "none",
            fontFamily: "Monospace",
          }}
        >
          About Me
        </DialogTitle>
        <DialogContent
          style={{
            border: "solid",
            backgroundColor: props.currentTheme.primary,
            borderColor: props.currentTheme.highlight,
            borderTop: "none",
          }}
        >
          <DialogContentText
            style={{
              color: props.currentTheme.textColor,
              textIndent: "40px",
            }}
          >
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
    </div>
  );
};

export default AboutMe;

import React, { useState } from "react";
import {
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slide,
  SnackbarContent,
  Snackbar,
  Typography,
  Link,
} from "@material-ui/core/";
import { Send } from "@material-ui/icons";
import emailjs from "emailjs-com";
import info from "../config.js";
import { useStyles } from "../Styles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactForm = (props) => {
  const style = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  async function sendMessage(e) {
    e.preventDefault();
    const input = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };
    emailjs.send("gmail", "template_7L4JoTk5", input, info.userKey);
    setEmailSent(true);
    handleClose();
  }
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleCloseSend = () => {
    setEmailSent(false);
  };
  return (
    <div>
      <Link
        style={{ color: props.currentTheme.highlight }}
        onClick={(e) => e.preventDefault()}
      >
        <Typography
          style={{
            color: props.currentTheme.textColor,
            fontSize: 20,
            "&:hover": {
              color: props.currentTheme.highlight,
            },
          }}
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Contact Me
        </Typography>
      </Link>
      <Snackbar
        open={emailSent}
        autoHideDuration={1500}
        onClose={handleCloseSend}
      >
        <SnackbarContent
          style={{ backgroundColor: props.currentTheme.highlight }}
          message={"Message Sent!"}
          action={<Send />}
        />
      </Snackbar>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent
          className={style.ContactFormMain}
          style={{
            backgroundColor: props.currentTheme.primary,
            borderColor: props.currentTheme.highlight,
          }}
        >
          <form onSubmit={(e) => sendMessage(e)}>
            <Grid className={style.FormInputWrapper} spacing={1} container>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Name"
                  autoComplete="disabled"
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  color="secondary"
                  inputProps={{
                    style: { color: props.currentTheme.textColor },
                  }}
                  value={name}
                  fullWidth={true}
                  required
                  onChange={(e) => setName(e.target.value)}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Email"
                  color="secondary"
                  autoComplete="disabled"
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  inputProps={{
                    style: { color: props.currentTheme.textColor },
                  }}
                  value={email}
                  required
                  fullWidth={true}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Subject"
                  color="secondary"
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  inputProps={{
                    style: { color: props.currentTheme.textColor },
                  }}
                  value={subject}
                  fullWidth={true}
                  onChange={(e) => setSubject(e.target.value)}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Message"
                  color="secondary"
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  inputProps={{
                    style: {
                      color: props.currentTheme.textColor,
                    },
                  }}
                  value={message}
                  fullWidth={true}
                  required
                  multiline
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <div
                  className={style.SubmitButtonWrapper}
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                    padding: "10px",
                  }}
                >
                  <Typography
                    style={{
                      color: props.currentTheme.textColor,
                      fontSize: 15,
                    }}
                  >
                    Email mdrewry0@gmail.com
                  </Typography>
                  <div style={{ flexGrow: 1 }} />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: props.currentTheme.highlight,
                      color: props.currentTheme.textColor,
                    }}
                  >
                    <Send />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;

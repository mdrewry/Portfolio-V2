import React, { useState } from "react";
import {
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slide,
} from "@material-ui/core/";
import { Send, ContactMail } from "@material-ui/icons";
import emailjs from "emailjs-com";
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
  async function sendMessage(e) {
    e.preventDefault();
    const input = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };
    emailjs.send(
      "gmail",
      "template_7L4JoTk5",
      input,
      "user_EQyjXWIQtaTgD1oTvx95a"
    );
    handleClose();
  }
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <Tooltip title={"Contact Me"}>
        <ContactMail
          style={{
            color: props.currentTheme.highlight,
            fontSize: 40,
            paddingTop: "10px",
          }}
          onClick={() => {
            setOpenDialog(true);
          }}
        />
      </Tooltip>
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
            <Grid className={style.FormInputWrapper} spacing={2} container>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Name"
                  className={style.FormInput}
                  autoComplete="disabled"
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  color="secondary"
                  value={name}
                  fullWidth={1}
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
                  className={style.FormInput}
                  style={{
                    backgroundColor: props.currentTheme.secondary,
                  }}
                  value={email}
                  required
                  fullWidth={1}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                ></TextField>
              </Grid>
            </Grid>
            <TextField
              label="Subject"
              color="secondary"
              className={style.FormInput}
              style={{
                backgroundColor: props.currentTheme.secondary,
              }}
              value={subject}
              fullWidth={1}
              onChange={(e) => setSubject(e.target.value)}
              variant="filled"
            ></TextField>
            <TextField
              label="Message"
              color="secondary"
              className={style.FormInput}
              style={{
                backgroundColor: props.currentTheme.secondary,
              }}
              value={message}
              fullWidth={1}
              required
              multiline
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              variant="filled"
            ></TextField>
            <div className={style.SubmitButtonWrapper}>
              <div style={{ flexGrow: 1 }}></div>
              <Button
                type="submit"
                variant="contained"
                style={{
                  marginTop: "5px",
                  backgroundColor: props.currentTheme.highlight,
                  color: props.currentTheme.textColor,
                }}
              >
                <Send />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;

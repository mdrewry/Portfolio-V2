import React, { useState, Fragment } from "react";
import {
  TextField,
  Button,
  SnackbarContent,
  Snackbar,
  Typography,
} from "@material-ui/core/";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import emailjs from "emailjs-com";

const ContactForm = ({ style, currentTheme }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  async function sendMessage(e) {
    e.preventDefault();
    const input = {
      email: email,
      name: name,
      message: message,
    };
    emailjs.send(
      "gmail",
      "template_7L4JoTk5",
      input,
      process.env.REACT_APP_EMAILJS_KEY
    );
    setEmail("");
    setName("");
    setMessage("");
    setEmailSent(true);
  }
  const handleCloseSend = () => {
    setEmailSent(false);
  };
  const theme = createMuiTheme({
    palette: {
      primary: { 500: currentTheme.highlight },
    },
  });
  return (
    <Fragment>
      <Snackbar
        open={emailSent}
        autoHideDuration={1500}
        onClose={handleCloseSend}
      >
        <SnackbarContent
          className={style.backgroundColorHighlight}
          message={"Message Sent!"}
          action={<Send />}
        />
      </Snackbar>
      <form
        style={{ marginBottom: "10px", width: "100%" }}
        onSubmit={(e) => sendMessage(e)}
      >
        <ThemeProvider theme={theme}>
          <TextField
            label="Name"
            autoComplete="disabled"
            className={style.formField}
            inputProps={{
              style: {
                color: currentTheme.textColor,
              },
            }}
            InputLabelProps={{
              required: false,
              style: {
                color: currentTheme.textColor,
              },
            }}
            value={name}
            fullWidth={true}
            required
            onChange={(e) => setName(e.target.value)}
            variant="filled"
          />

          <TextField
            label="Email"
            autoComplete="disabled"
            className={style.formField}
            inputProps={{
              style: { color: currentTheme.textColor },
            }}
            InputLabelProps={{
              required: false,
              style: {
                color: currentTheme.textColor,
              },
            }}
            value={email}
            required
            fullWidth={true}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
          />

          <TextField
            label="Message"
            className={style.formField}
            inputProps={{
              style: {
                color: currentTheme.textColor,
              },
            }}
            InputLabelProps={{
              required: false,
              style: {
                color: currentTheme.textColor,
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
        </ThemeProvider>
        <Button
          type="submit"
          variant="contained"
          className={style.submitButton}
        >
          <Typography className={style.submitText}>Send Message</Typography>
          <Send />
        </Button>
      </form>
    </Fragment>
  );
};

export default ContactForm;

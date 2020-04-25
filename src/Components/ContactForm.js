import React, { useState } from "react";
import {
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogContent,
} from "@material-ui/core/";
import { Send, ContactMail } from "@material-ui/icons";
import emailjs from "emailjs-com";
import { useStyles } from "../Styles.js";

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
    emailjs
      .send("gmail", "template_7L4JoTk5", input, "user_EQyjXWIQtaTgD1oTvx95a")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
    handleClose();
  }
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <Tooltip title="Contact Me">
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
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent
          className={style.ContactFormMain}
          style={{
            backgroundColor: props.currentTheme.primary,
            borderColor: props.currentTheme.highlight,
          }}
        >
          <form onSubmit={(e) => sendMessage(e)}>
            <div fullWidth={1} className={style.FormInputWrapper}>
              <TextField
                label="Name"
                className={style.FormInput}
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                label="Email"
                className={style.FormInput}
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </div>
            <TextField
              label="Subject"
              className={style.FormInput}
              value={subject}
              fullWidth={1}
              onChange={(e) => setSubject(e.target.value)}
            ></TextField>
            <TextField
              label="Message"
              className={style.FormInput}
              value={message}
              fullWidth={1}
              required
              multiline
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            ></TextField>
            <Button type="submit">
              <Send />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;

import React from "react";
import useStyles from "../../Styles.js";
import EmailIconI from "../../Res/MailIcon.png";
function EmailIcon() {
  const style = useStyles();
  const setClipboard = (e) => {
    const text = document.createElement("textarea");
    text.innerText = "mdrewry0@gmail.com";
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
  };
  return (
    <div>
      <img
        className={style.IconImage}
        src={EmailIconI}
        onClick={(e) => setClipboard()}
      ></img>
    </div>
  );
}

export default EmailIcon;

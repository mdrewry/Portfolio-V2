const fs = require("fs");

fs.writeFileSync(
  ".env",
  `REACT_APP_EMAILJS_KEY=${process.env.REACT_APP_EMAILJS_KEY}\n`
);

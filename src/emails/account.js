const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendWelcomeEmail = (email, name) => {
  transporter.sendMail({
    from: "mavidev93@gmail.com",
    to: email,
    subject: "thanks fo joining in",
    text: `welcome to the app, ${name}. Let me know how you get along with the app. `,
  });
};

const sendLeavingEmail = (email, name) => {
  transporter.sendMail({
    from: "mavidev93@gmail.com",
    to: email,
    subject: `goodbye dear ${name}`,
    text: `goobye dear ${name}. please let us know how can we improve the app `,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendLeavingEmail,
};

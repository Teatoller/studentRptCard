const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: function(to, subject, html) {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD
      }
    });

    const mailOption = {
      from: process.env.MAIL,
      to,
      subject,
      html
    };

    transport.sendMail(mailOption, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent!" + info.response);
      }
    });
  }
};

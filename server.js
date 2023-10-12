const nodemailer = require("nodemailer");

    //nodmailer mail sender detail
var transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
      user: "apikey",
      pass: "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",
    },
  });
  
  var mailOption = {
      from: "huxxnainali@gmail.com",
      to: "mdkprogrammer@gmail.com",
      subject: "Security Alert",
      text: "this is a test",
      html:`<h1>This is test email</h1>`,
    };
  
    //send email to user for verification of account
    transporter.sendMail(mailOption, function (err, info) {
      if (err) {
          console.log(err)
      } else {
          console.log(info)
      }
});

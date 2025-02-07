import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";

Meteor.startup(() => {
  process.env.MAIL_URL = "smtp://your_smtp_server";
});

Meteor.methods({
  "contact.sendEmail"(formData) {
    check(formData, {
      name: String,
      email: String,
      message: String,
    });

    Email.send({
      to: "admin@vs1cloud.com",
      from: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: formData.message,
    });

    return "Email sent successfully!";
  },
});

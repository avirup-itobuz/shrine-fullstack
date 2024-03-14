import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

function generateEmail() {
  var mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "<h1>Shrine</h1>",
      link: "http://127.0.0.1:5500/frontend/index.html",
    },
  });
  var email = {
    body: {
      name: "Heyyy!",
      intro: "Welcome to Shrine! We're very excited to have you on board.",
      action: {
        instructions: "Explore more here :",
        button: {
          color: "#22BC66",
          text: "Explore",
          link: "http://127.0.0.1:5500/frontend/index.html",
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  var emailBody = mailGenerator.generate(email);
  return emailBody;
}

export function sendMail(receiverEmail) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "avirup@itobuz.com",
      pass: process.env.PASS,
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: "avirup@itobuz.com",
      to: `${receiverEmail}`,
      subject: "Subscribed to newsletter",
      text: "Hello world?",
      html: generateEmail(),
    });

    console.log("Message sent: %s", info.messageId);
  }
  try {
    main();
    return true;
  } catch (err) {
    return false;
  }
}

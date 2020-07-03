import User from "../models/User";
import passport from "passport";
import routes from "../routes";
import { mailOptions, transporter } from "../nodemailer";
import cryptoRandomString from "crypto-random-string";

export const login = passport.authenticate("local", {
  failureRedirect: routes.HOME,
  successRedirect: routes.ME,
});
export const idCheck = async (req, res) => {
  const {
    body: { id },
  } = req;
  const users = await User.find({ ID: id });
  if (users.length === 0) {
    res.status(200).send({ result: true });
  } else {
    res.stats(400).send({ result: false });
  }
};
export const sendEmail = (req, res) => {
  const {
    body: { name, email },
  } = req;
  const code = cryptoRandomString({ length: 10, type: "base64" });
  try {
    transporter.sendMail(mailOptions(name, email, code));
    console.log("Email sending");
    res.status(200).send({ result: true, code });
  } catch (e) {
    res.status(400).send({ result: false });
  }
  // const code = cryptoRandomString({ length: 10, type: "base64" });
  // transporter.sendMail(mailOptions(name, email, code), (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(404).send({ result: false });
  //   } else {
  //     console.log("Email sending");
  //     res.status(200).send({ result: true, code });
  //   }
  // });
};

import User from "../models/User";
import passport from "passport";
import routes from "../routes";
import { mailOptions, transporter } from "../nodemailer";
import cryptoRandomString from "crypto-random-string";

export const login = passport.authenticate("local", {
  failureRedirect: routes.HOME,
  successRedirect: routes.ME,
});
export const signUp = async (req, res, next) => {
  const {
    body: { nickname, email, ID, password },
  } = req;
  console.log(nickname, email, ID, password);

  try {
    const newUser = await User({
      nickname,
      email,
      ID,
    });
    await User.register(newUser, password);
    next();
  } catch (e) {
    console.log(e);
  }
};
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
  transporter.sendMail(mailOptions(name, email, code), (error, info) => {
    if (error) {
      res.send({ result: false });
      res.status(400);
    } else {
      res.status(200).send({ result: true, code });
    }
  });
};

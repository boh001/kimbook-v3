import User from "../models/User";
import passport from "passport";
import routes from "../routes";
import { mailOptions, transporter } from "../nodemailer";
import cryptoRandomString from "crypto-random-string";

export const login = passport.authenticate("local", {
  failureRedirect: routes.HOME,
  successRedirect: routes.ME,
});
export const sendEmail = (req, res) => {
  const {
    body: { name, email },
  } = req;
  const code = cryptoRandomString({ length: 10, type: "base64" });
  transporter.sendMail(mailOptions(name, email, code), (error, info) => {
    if (error) {
      console.log(error);
      res.statu(404).send({ result: false });
    } else {
      console.log("Email sending");
    }
    res.send(200, { result: true, code });
  });
};

import passport from "passport";
import cryptoRandomString from "crypto-random-string";
import User from "../models/User";
import Content from "../models/Content";
import routes from "../routes";
import { mailOptions, transporter } from "../nodemailer";

export const login = passport.authenticate("local", {
  failureRedirect: routes.HOME,
  successRedirect: routes.ME,
});
export const signUp = async (req, res, next) => {
  const {
    body: { nickname, email, ID, password },
  } = req;

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
  if (id.length === 0) {
    res.send({ result: false });
    res.status(400);
  } else {
    const users = await User.find({ ID: id });
    if (users.length === 0) {
      res.status(200).send({ result: true });
    } else {
      res.send({ result: false });
      res.status(400);
    }
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
export const upInfo = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const loginUser = await User.findOne({ _id });
    const contents = await Content.find({}).populate([
      {
        path: "comments",
        model: "Comment",
        populate: [
          {
            path: "authorId",
            model: "User",
          },
        ],
      },
      {
        path: "authorId",
        model: "User",
      },
    ]);
    res.status(200).send({ user: loginUser, contents });
  } catch (error) {
    res.send({ error });
    res.status(400);
  }
};
export const searchUser = async (req, res) => {
  const {
    body: { result },
  } = req;
  try {
    const users = await User.find({
      $or: [
        { email: { $regex: `${result}`, $options: "i" } },
        { ID: { $regex: `${result}`, $options: "i" } },
        { nickname: { $regex: `${result}`, $options: "i" } },
      ],
    });

    console.log(users);
    res.status(200).send({ users });
  } catch (error) {
    res.send({ error });
    res.status(400);
    console.log(error);
  }
};

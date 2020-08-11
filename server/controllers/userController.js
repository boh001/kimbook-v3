import passport from "passport";
import cryptoRandomString from "crypto-random-string";
import User from "../models/User";
import Content from "../models/Content";
import routes from "../routes";
import { mailOptions, transporter } from "../nodemailer";

// export const login = passport.authenticate("local", {
//   failureRedirect: routes.HOME,
//   successRedirect: routes.ME,
// });
export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      // 로그인 성공
      const json = JSON.parse(JSON.stringify(user));
      req.logIn(user, (error) => {
        if (error) {
          return next(error);
        }
        return res.redirect(routes.ME);
      });
    } else {
      // 로그인 실패
      res.redirect(routes.HOME);
    }
  })(req, res, next);
};
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
  } catch (error) {
    res.send({ error });
  }
};
export const idCheck = async (req, res) => {
  const {
    body: { id },
  } = req;
  if (id.length === 0) {
    res.send({ result: false, message: "아이디를 입력해주세요" });
    res.status(400);
  } else {
    const users = await User.find({ ID: id });
    if (users.length === 0) {
      res.status(200).send({ result: true, message: "사용가능합니다" });
    } else {
      res.send({ result: false, message: "중복된 아이디입니다" });
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
      res.send({ result: false, message: "전송 실패" });
      res.status(400);
    } else {
      res.status(200).send({ result: true, code, message: "전송 성공" });
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

    res.status(200).send({ users });
  } catch (error) {
    res.send({ error });
    res.status(400);
    console.log(error);
  }
};
export const profileUser = async (req, res) => {
  const {
    body: { userId },
  } = req;
  try {
    const user = await User.findOne({ _id: userId }).populate([
      {
        path: "myContents",
        model: "Content",
      },
      {
        path: "markContents",
        model: "Content",
      },
      {
        path: "friends",
        model: "User",
      },
    ]);
    res.status(200).send({ user });
  } catch (error) {
    res.status(400);
    res.send({ error });
  }
};
export const supportInfoUser = async (req, res) => {
  const {
    user: { _id },
  } = req;
  try {
    const user = await User.findOne({ _id });
    res.status(200).send({ user });
  } catch (e) {
    console.log(e);
  }
};

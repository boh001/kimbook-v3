import passport from "passport";
import cryptoRandomString from "crypto-random-string";
import User from "../models/User";
import Content from "../models/Content";
import routes from "../routes";
import {
  signUpMailOptions,
  changeMailOptions,
  transporter,
} from "../nodemailer";

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (user) {
      // 로그인 성공
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
export const logout = (req, res) => {
  req.logout();
  res.status(302).json("success");
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
  console.log(name, email);
  const code = cryptoRandomString({ length: 10, type: "base64" });
  let mailOptions;
  if (req.user) {
    mailOptions = changeMailOptions;
  } else {
    mailOptions = signUpMailOptions;
  }
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
  if (result.length < 1) {
    res.status(200).send({ users: [] });
  } else {
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
  }
};
export const profileUser = async (req, res) => {
  const {
    body: { payload: userId },
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
export const changeProfile = async (req, res) => {
  const {
    body: { nickname, email },
    user: { _id },
    file,
  } = req;
  console.log(nickname, email, file);
  try {
    await User.findByIdAndUpdate(_id, {
      avatarUrl: file ? file.location : "",
      nickname,
      email,
    });
    res.send({ result: true });
  } catch (e) {
    console.log(e);
  }
};
export const changePwd = async (req, res) => {
  const {
    body: { oldPassword, newPassword1 },
    user: { _id },
  } = req;
  console.log(req.body);
  try {
    const user = await User.findOne({ _id });
    console.log(user);
    user.changePassword(oldPassword, newPassword1, (err, _) => {
      if (err) {
        if (err.name === "IncorrectPasswordError")
          res.send({
            result: false,
            message: "일치하지 않는 비밀번호입니다.",
          });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
export const findId = async (req, res) => {
  const {
    body: { nickname, email },
  } = req;
  console.log(nickname, email);
  try {
    const user = await User.findOne({ nickname, email });
    console.log(user);
    if (user) {
      res.send({ result: true });
    } else {
      res.send({ result: false });
    }
  } catch (e) {
    console.log(e);
  }
};
export const findPwd = async (req, res) => {
  const {
    body: { nickname, email, id },
  } = req;
  try {
    const user = await User.findOne({ nickname, email, ID: id });
    console.log(user);
    if (user) {
      res.send({ result: true });
    } else {
      res.send({ result: false });
    }
  } catch (e) {
    console.log(e);
  }
};
export const userFollow = async (req, res) => {
  const {
    user: { _id },
  } = req;
  const {
    body: { payload: userId },
  } = req;
  console.log(req.body);
  try {
    const me = await User.findOne({ _id });
    const user = await User.findOne({ _id: userId });
    console.log(user);
    if (!me.follow.includes(userId)) {
      await me.updateOne({ $push: { follow: userId } });
      await user.updateOne({ $push: { follower: _id } });
      res.send({ result: true, userId: _id });
    } else {
      await me.updateOne({ $pull: { follow: userId } });
      await user.updateOne({ $pull: { follower: _id } });
      res.send({ result: false });
    }
  } catch (error) {
    console.log(error);
  }
};

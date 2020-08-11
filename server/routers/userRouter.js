import express from "express";
import routes from "../routes";
import {
  login,
  sendEmail,
  idCheck,
  signUp,
  upInfo,
  searchUser,
  profileUser,
  supportInfoUser,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post(routes.SIGNUP, signUp, login);
userRouter.post(routes.IDCHECK, idCheck);
userRouter.post(routes.SENDEMAIL, sendEmail);
userRouter.post(routes.LOGIN, login);
userRouter.post(routes.INFO, upInfo);
userRouter.post(routes.SEARCH, searchUser);
userRouter.post(routes.PROFILE, profileUser);
userRouter.post(routes.SUPPORT, supportInfoUser);
export default userRouter;

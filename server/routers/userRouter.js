import express from "express";
import routes from "../routes";
import {
  login,
  logout,
  sendEmail,
  idCheck,
  signUp,
  upInfo,
  searchUser,
  profileUser,
  supportInfoUser,
  changeProfile,
  changePwd,
  findId,
  findPwd,
  userFollow,
} from "../controllers/userController";
import { multerSingleMiddleware } from "../multer";

const userRouter = express.Router();

userRouter.post(routes.SIGNUP, signUp, login);
userRouter.post(routes.IDCHECK, idCheck);
userRouter.post(routes.SENDEMAIL, sendEmail);
userRouter.post(routes.LOGIN, login);
userRouter.post(routes.FINDID, findId);
userRouter.post(routes.FINDPWD, findPwd);
userRouter.get(routes.LOGOUT, logout);
userRouter.post(routes.INFO, upInfo);
userRouter.post(routes.SEARCH, searchUser);
userRouter.post(routes.PROFILE, profileUser);
userRouter.post(routes.SUPPORT, supportInfoUser);
userRouter.post(
  routes.CHANGEPROFILE,

  multerSingleMiddleware,
  changeProfile
);
userRouter.post(routes.CHANGEPWD, changePwd);
userRouter.post(routes.FOLLOW, userFollow);
export default userRouter;

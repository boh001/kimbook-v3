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
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middleware";
import { multerSingleMiddleware } from "../multer";

const userRouter = express.Router();

userRouter.post(routes.SIGNUP, onlyPublic, signUp, login);
userRouter.post(routes.IDCHECK, onlyPublic, idCheck);
userRouter.post(routes.SENDEMAIL, onlyPublic, sendEmail);
userRouter.post(routes.LOGIN, onlyPublic, login);
userRouter.post(routes.FINDID, onlyPublic, findId);
userRouter.post(routes.FINDPWD, onlyPublic, findPwd);
userRouter.get(routes.LOGOUT, onlyPrivate, logout);
userRouter.post(routes.INFO, onlyPrivate, upInfo);
userRouter.post(routes.SEARCH, onlyPrivate, searchUser);
userRouter.post(routes.PROFILE, onlyPrivate, profileUser);
userRouter.post(routes.SUPPORT, onlyPrivate, supportInfoUser);
userRouter.post(
  routes.CHANGEPROFILE,
  onlyPrivate,
  multerSingleMiddleware,
  changeProfile
);
userRouter.post(routes.CHANGEPWD, onlyPrivate, changePwd);
export default userRouter;

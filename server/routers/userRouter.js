import express from "express";
import routes from "../routes";
import {
  login,
  sendEmail,
  idCheck,
  signUp,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post(routes.SIGNUP, signUp, login);
userRouter.post(routes.IDCHECK, idCheck);
userRouter.post(routes.SENDEMAIL, sendEmail);
userRouter.post(routes.LOGIN, login);
export default userRouter;

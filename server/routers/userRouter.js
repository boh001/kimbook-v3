import express from "express";
import routes from "../routes";
import { login, sendEmail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post(
  routes.USER,
  (req, res, next) => {
    console.log("hi");
    next();
  },
  login
);
userRouter.post(routes.SENDEMAIL, sendEmail);
export default userRouter;

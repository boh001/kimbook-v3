import express from "express";
import routes from "../routes";
import { multerMiddleware } from "../multer";
import {
  uploadContent,
  upLike,
  upMark,
} from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.post(routes.UPLOAD, multerMiddleware, uploadContent);
contentRouter.post(routes.LIKE, upLike);
contentRouter.post(routes.MARK, upMark);

export default contentRouter;

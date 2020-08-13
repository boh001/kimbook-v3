import express from "express";
import routes from "../routes";
import { multerMiddleware } from "../multer";
import {
  uploadContent,
  upLike,
  upMark,
  loadDetail,
  deleteContent,
} from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.post(routes.UPLOAD, multerMiddleware, uploadContent);
contentRouter.post(routes.LIKE, upLike);
contentRouter.post(routes.MARK, upMark);
contentRouter.post(routes.MARK, upMark);
contentRouter.post(routes.DETAIL, loadDetail);
contentRouter.post(routes.DELETE, deleteContent);

export default contentRouter;

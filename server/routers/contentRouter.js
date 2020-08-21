import express from "express";
import routes from "../routes";
import { multerMultiMiddleware } from "../multer";
import { onlyPrivate } from "../middleware";
import {
  uploadContent,
  upLike,
  upMark,
  loadDetail,
  deleteContent,
} from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.post(
  routes.UPLOAD,
  onlyPrivate,
  multerMultiMiddleware,
  uploadContent
);
contentRouter.post(routes.LIKE, onlyPrivate, upLike);
contentRouter.post(routes.MARK, onlyPrivate, upMark);
contentRouter.post(routes.MARK, onlyPrivate, upMark);
contentRouter.post(routes.DETAIL, onlyPrivate, loadDetail);
contentRouter.post(routes.DELETE, onlyPrivate, deleteContent);

export default contentRouter;

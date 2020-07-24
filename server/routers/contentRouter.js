import express from "express";
import routes from "../routes";
import { multerMiddleware } from "../multer";
import { uploadContent, upLike } from "../controllers/contentController";
const contentRouter = express.Router();

contentRouter.post(routes.UPLOAD, multerMiddleware, uploadContent);
contentRouter.post(routes.LIKE, upLike);

export default contentRouter;

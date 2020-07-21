import express from "express";
import routes from "../routes";
import { multerMiddleware } from "../multer";
import { uploadContent } from "../controllers/contentController";
const contentRouter = express.Router();

contentRouter.post(routes.UPLOAD, multerMiddleware, uploadContent);

export default contentRouter;

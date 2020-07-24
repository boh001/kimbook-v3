import express from "express";
import routes from "../routes";
import { uploadComment } from "../controllers/commentController";
const contentRouter = express.Router();

contentRouter.post(routes.UPLOAD, uploadComment);

export default contentRouter;

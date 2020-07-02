import express from "express";
import routes from "../routes";

const homeRouter = express.Router();

homeRouter.get(routes.HOME, (req, res) => console.log("hi"));

export default homeRouter;

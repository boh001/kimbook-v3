import express from "express";
import routes from "../routes";

const initRouter = express.Router();

initRouter.get(routes.API, (req, res) => console.log("hi"));
